using System;
using System.Collections.Generic;

namespace Magazin.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Category { get; set; }

    public decimal? Price { get; set; }

    public string? Description { get; set; }
}
