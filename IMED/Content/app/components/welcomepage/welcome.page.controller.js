class WelcomepageController {  
    constructor($scope, userProfileService,$ionicLoading) {
        'ngInject';
        $scope.loadingspinner = true;
        $scope.dashboardBtn = false;
        userProfileService
            .getUserProfile()
            .then((result) => {
                $scope.userName = result.data.userName;
                $scope.welcomeMessage = result.data.welcomeMessage;
                $scope.loadingspinner = false;  
                $scope.dashboardBtn =true;
            });
    }
}
export default WelcomepageController;

