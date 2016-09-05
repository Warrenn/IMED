using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class PayrollSummary
    {
        public int PayrollOverDue { get; set; }
        public int NotSubmitted { get; set; }
        public int Submitted { get; set; }
    }
}