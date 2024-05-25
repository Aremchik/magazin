using System;
using System.Collections.Generic;

namespace Magazin.Models;

public partial class Order
{
    public int Orderid { get; set; }

    public int? Userid { get; set; }

    public decimal? Totalamount { get; set; }

    public DateTime? Orderdate { get; set; }

    public virtual User? User { get; set; }
}
