class MenubarController {
    constructor($scope, $ionicPopover) {
        'ngInject';

        this.name = 'menubar';
        $scope.userName = this.userName;
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
