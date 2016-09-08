using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using IMED.Models;
using IMED.Services;
using Microsoft.AspNet.Identity;

namespace IMED.Security
{
    public class UserStore : IUserStore<UserProfile>
    {
        private readonly IUserProfileService service;

        public UserStore(IUserProfileService service)
        {
            this.service = service;
        }

        #region Implementation of IDisposable

        public void Dispose()
        {
            
        }

        #endregion

        #region Implementation of IUserStore<UserProfile,in string>

        public Task CreateAsync(UserProfile user)
        {
            return Task.FromResult(0);
        }

        public Task UpdateAsync(UserProfile user)
        {
            return Task.FromResult(0);
        }

        public Task DeleteAsync(UserProfile user)
        {
            return Task.FromResult(0);
        }

        public Task<UserProfile> FindByIdAsync(string userId)
        {
            return Task.Run(() => service.GetUserProfile());
        }

        public Task<UserProfile> FindByNameAsync(string userName)
        {
            return Task.FromResult((UserProfile) null);
        }

        #endregion
    }
}