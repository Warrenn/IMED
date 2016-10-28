import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsProcessingController extends GridLayoutControllerBase {
    constructor(claimsProcessingService, $rootScope, $scope, $ionicPopover) {
        'ngInject';

        super($rootScope);

        $scope.selectedClaim = {};
        $scope.popoverTemplate = '<ion-popover-view>' +
            '<ion-content scroll="false" class="padding">'+
            '<table class="gridlayout-data-table">' +
                '<thead>' +
                    '<tr>' +
                        '<td class="gridlayout-data-table-heading">Contact Details</td>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr class="gridlayout-data-table-row">' +
                        '<td class="gridlayout-data-table-value">' +
                            '<span class="gridlayout-data-item-title">{{top}}</span>' +
                            '<div class="icon ion-android-call gridlayout-item-status layout-link"></div>'+                       
                        '</td>'+
                    '</tr>' +
                    '<tr class="gridlayout-data-table-row-alternate">' +
                        '<td class="gridlayout-data-table-value">' +
                            '<span class="gridlayout-data-item-title">{{selectedClaim.memberEmail}}</span>' +
                            '<div class="icon ion-at gridlayout-item-status layout-link"></div>'+                       
                        '</td>'+
                    '</tr>' +
                '</tbody>' +
            '</table>' +
            '</ion-content>' +
        '</ion-popover-view>';

        $scope.payrollPopover = $ionicPopover.fromTemplate($scope.popoverTemplate, {
            scope: $scope,
            animation: 'am-fade-and-slide-right',
            controllerAs:'$ctrl'
        });

        $scope.showContactDetails = function(claim, event){
            $scope.selectedClaim = claim;
            $scope.top = event.clientY
            $scope.payrollPopover.show(event);
        }
    }
}

export default ClaimsProcessingController;