using Magazin.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Magazin.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        private readonly PasswordHasher<User> _passwordHasher = new PasswordHasher<User>();


        [HttpPost("register")]
        public async Task<IActionResult> Register(User newUser)
        {
            using var _context = new MagazinContext();
            if (_context.Users.Any(u => u.Email == newUser.Email))
            {
                return BadRequest(new { message = "User already exists" });
            }

            newUser.Password = _passwordHasher.HashPassword(newUser, newUser.Password);

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully" });
        }


        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            MagazinContext db = new();
            var products = db.Products.ToArray();
            return Ok(products);
        }
        [HttpPost("login")]
        public IActionResult Login(User loginData)
        {
            using var db = new MagazinContext();
            var user = db.Users.FirstOrDefault(u => u.Email == loginData.Email);
            if (user == null || _passwordHasher.VerifyHashedPassword(user, user.Password, loginData.Password) != PasswordVerificationResult.Success)
            {
                return Unauthorized();
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Userid.ToString()),
                new Claim(ClaimTypes.Name, user.Email)
            };
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                claims: claims,
                expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(2)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256)
            );

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return Ok(new { Token = encodedJwt, userid = user.Userid });
        }


        [HttpGet("user/{id}")]
        public IActionResult GetUser(int id)
        {
            MagazinContext db = new();
            var users = db.Users.ToArray();
            var user = users.FirstOrDefault(u => u.Userid == id);
            if (user == null) return NotFound(new { Message = "Не указано" });

            return Ok(new
            {
                user.Userid,
                user.Username,
                user.Email,
                user.Password,
                user.Phone,
                user.Address
            });
        }
        [HttpPost("update/user/{userId}")]
        public async Task<ActionResult> UpdateUser(int userId, User updatedUser)
        {

            MagazinContext _context = new();
            if (userId != updatedUser.Userid)
            {
                return BadRequest();
            }

            _context.Entry(updatedUser).State = EntityState.Modified;

            
             await _context.SaveChangesAsync();
           

            return NoContent();
        }

        [HttpGet("getUserCart/{userId:int}")]
        public async Task<IActionResult> GetCart(int userId)
        {
            MagazinContext _context = new();

            var order = await _context.Orders
                                      .Where(o => o.Userid == userId)
                                      .OrderByDescending(o => o.Orderdate)
                                      .FirstOrDefaultAsync();

            if (order == null)
            {
                return NotFound("User does not have any orders.");
            }

            var orderedProducts = await _context.Orderedproducts
                                                .Where(op => op.Orderid == order.Orderid)
                                                .ToListAsync();

            var products = await _context.Products.ToListAsync();

            var cartItems = from op in orderedProducts
                            join p in products on op.Productid equals p.Id
                            select new Orderedproduct
                            {
                                Orderid = op.Orderid,
                                Productid = p.Id,
                                Orderedproductid = op.Orderedproductid,
                                Numberitems = op.Numberitems,
                                Order = order,
                                Product = p
                            };

            return Ok(cartItems);
        }
        [HttpPost("addProduct/{userId:int}")]
        public async Task<IActionResult> AddProductToCart(int userId, [FromBody] AddProductToCartRequest request)
        {
            MagazinContext _context = new();
            var product = await _context.Products.FindAsync(request.ProductId);
            if (product == null)
            {
                return NotFound("Product not found.");
            }

            var order = await _context.Orders
                                      .Where(o => o.Userid == userId)
                                      .OrderByDescending(o => o.Orderdate)
                                      .FirstOrDefaultAsync();

            if (order == null)
            {
                order = new Order
                {
                    Userid = userId,
                    Orderdate = DateTime.Now,
                    Totalamount = 0 
                };
                _context.Orders.Add(order);
                await _context.SaveChangesAsync();
            }

            var orderedProduct = await _context.Orderedproducts
                                               .Where(op => op.Orderid == order.Orderid && op.Productid == request.ProductId)
                                               .FirstOrDefaultAsync();

            if (orderedProduct == null)
            {
                orderedProduct = new Orderedproduct
                {
                    Orderid = order.Orderid,
                    Productid = request.ProductId,
                    Numberitems = request.Quantity
                };
                _context.Orderedproducts.Add(orderedProduct);
            }
            else
            {
                orderedProduct.Numberitems += request.Quantity;
                _context.Orderedproducts.Update(orderedProduct);
            }

            order.Totalamount += product.Price * request.Quantity;
            _context.Orders.Update(order);

            await _context.SaveChangesAsync();

            return Ok("Product added to cart successfully.");
        }

        [HttpDelete("deleteProduct/{userId:int}")]
        public async Task<IActionResult> DeleteProductFromCart(int userId, [FromBody] DeleteProductFromCartRequest request)
        {
            using var _context = new MagazinContext();

            var order = await _context.Orders
                                      .Where(o => o.Userid == userId)
                                      .OrderByDescending(o => o.Orderdate)
                                      .FirstOrDefaultAsync();

            if (order == null)
            {
                return NotFound("No active order found for the user.");
            }

            var orderedProduct = await _context.Orderedproducts
                                               .Where(op => op.Orderid == order.Orderid && op.Productid == request.ProductId)
                                               .Include(op => op.Product) 
                                               .FirstOrDefaultAsync();

            if (orderedProduct == null)
            {
                return NotFound("Product not found in the cart.");
            }

            if (orderedProduct.Numberitems > 1)
            {
                orderedProduct.Numberitems -= 1;
          
                _context.Orderedproducts.Update(orderedProduct);
            }
            else
            {
                
                _context.Orderedproducts.Remove(orderedProduct);
            }

            if (order.Totalamount <= 0)
            {
                _context.Orders.Remove(order);
            }
            else
            {
                _context.Orders.Update(order);
            }

            await _context.SaveChangesAsync();

            return Ok("Product quantity updated in cart successfully.");
        }
        public class AddProductToCartRequest
        {
            public int ProductId { get; set; }
            public int Quantity { get; set; }
        }
        public class DeleteProductFromCartRequest
        {
            public int ProductId { get; set; }
        }
    }
   

}
