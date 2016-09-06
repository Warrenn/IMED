
class UserProfileService {
    constructor ($http, $httpParamSerializer) {
        'ngInject';

        this.getUserProfile=()=>
        {
            const  options = {
                url: '/api/UserProfile/GetUserProfile',
                method: 'GET'
            }
            return $http(options);
        }
    }
}

export default UserProfileService;