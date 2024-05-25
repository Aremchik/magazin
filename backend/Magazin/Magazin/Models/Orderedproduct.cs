using System;
using System.Collections.Generic;

namespace Magazin.Models;

public partial class Orderedproduct
{
    public int? Orderid { get; set; }

    public int? Productid { get; set; }

    public int? Orderedproductid { get; set; }
    public int? Numberitems { get; set; }

    public virtual Order? Order { get; set; }

    public virtual Product? Product { get; set; }
}
