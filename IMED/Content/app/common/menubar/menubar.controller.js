class MenubarController {
    constructor($scope, userProfileService, $ionicPopover) {
        'ngInject';

        userProfileService
            .getUserProfile()
            .then((result) => {
                $scope.userName = result.data.userName;
            });

        $ionicPopover.fromTemplateUrl('templates/popover.html', {
            scope: $scope,
            animation: 'am-fade-and-slide-right',
            controllerAs:'$strl'
        }).then(function(popover) {
            $scope.popover = popover;
        });
    }
}

export default MenubarController;
