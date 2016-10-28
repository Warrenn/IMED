using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class ClaimsProcessing
    {
        public string MemberName { get; set; }
        public string ClaimType { get; set; }
        public string MemberNumber { get; set; }
        public string SchemeCode { get; set; }
        public DateTime DayInStatus { get; set; }
        public DateTime DayOfNotification { get; set; }
        public string MemberTelephoneNumber { get; set; }
        public string MemberEmail { get; set; }
    }
}