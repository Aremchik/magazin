﻿using System;
using System.Collections.Generic;

namespace Magazin.Models;

public partial class User
{
    public int Userid { get; set; }

    public string? Username { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public string? Address { get; set; }

    public string? Phone { get; set; }

}
