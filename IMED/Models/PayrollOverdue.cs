using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class PayrollOverdue
    {
        public string SchemeName { get; set; }
        public string SchemeNumber { get; set; }
        public string PayPointName { get; set; }
        public DateTime AgreedDueDate { get; set; }
    }
}