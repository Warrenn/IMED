using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Models
{
    public class PagedRequest<T>
    {
        public T Filter { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
    }
}