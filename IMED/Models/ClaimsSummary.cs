using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class ClaimsSummary
    {
        public int Draft { get; set; }
        public int Processing { get; set; }
        public int Paid { get; set; }
    }
}