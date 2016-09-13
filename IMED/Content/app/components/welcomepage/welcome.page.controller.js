class WelcomepageController {  
      constructor($scope, userProfileService) {
        'ngInject';

        userProfileService
            .getUserProfile()
            .then((result) => {
                $scope.userName = result.data.userName;
                $scope.welcomeMessage = result.data.welcomeMessage;
            });
    }
}
export default WelcomepageController;

