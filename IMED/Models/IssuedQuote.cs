using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class IssuedQuote
    {
        public int Id { get; set; }
        public string ClientName { get; set; }
        public string QuoteNumber { get; set; }
        public DateTime ExpiryDate { get; set; }
        public bool Expired { get; set; }
    }
}