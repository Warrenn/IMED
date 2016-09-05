using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class PagedResult<T>
    {
        public IEnumerable<T>  Data { get; set; }
        public int Count { get; set; }
    }
}