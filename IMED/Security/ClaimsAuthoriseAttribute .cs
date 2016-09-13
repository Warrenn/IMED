using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace IMED.Security
{
    public class ClaimsAuthoriseAttribute : AuthorizeAttribute
    {
        #region Private Members

        private readonly string operation;
        private readonly string resource;

        #endregion

        #region Constructors

        public ClaimsAuthoriseAttribute(string operation, string resource)
        {
            this.operation = operation;
            this.resource = resource;
        }

        #endregion

        #region Virtual Methods

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            var user = httpContext.User;

            if (!user.Identity.IsAuthenticated)
            {
                return false;
            }

            var claim = ClaimsPrincipal.Current.FindFirst(c => c.Type == operation && c.Value == resource);

            return claim != null;
        }

        #endregion
    }
}