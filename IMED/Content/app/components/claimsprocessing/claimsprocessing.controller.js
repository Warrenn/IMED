import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsProcessingController extends GridLayoutControllerBase {
    constructor(claimsProcessingService, $rootScope, $scope, $ionicPopover) {
        'ngInject';

        super($rootScope);

        $scope.selectedClaim = {};

        $scope.popoverTemplate2 = '<ion-popover-view class="payroll-popover">' +
            '<ion-content scroll="false" class="padding">'+
                '<table class="gridlayout-data-table">' +
                    '<thead>' +
                        '<tr>' +
                            '<td class="gridlayout-data-table-heading">Payroll Details</td>' +
                            '<td class="gridlayout-data-table-heading">Contact Details</td>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                        '<tr class="gridlayout-data-table-row">' +
                            '<td class="gridlayout-data-table-value">' +
                                '<b>Scheme Name</b>: {{selectedClaim.memberName}}' +                      
                            '</td>'+
                            '<td class="gridlayout-data-table-value">' +
                                '<span class="gridlayout-data-item-title">{{selectedClaim.memberName}}</span>' +
                                '<div class="icon ion-android-person gridlayout-item-status"></div>'+                       
                            '</td>'+
                        '</tr>' +
                        '<tr class="gridlayout-data-table-row-alternate">' +
                            '<td class="gridlayout-data-table-value">' +
                                '<b>Pay Point Name</b>: {{selectedClaim.memberName}}' +                    
                            '</td>'+
                            '<td class="gridlayout-data-table-value">' +
                                '<span class="gridlayout-data-item-title">{{selectedClaim.memberTelephoneNumber}}</span>' +
                                '<div class="icon ion-android-call gridlayout-item-status"></div>'+                       
                            '</td>'+
                        '</tr>' +
                        '<tr class="gridlayout-data-table-row">' +
                            '<td class="gridlayout-data-table-value">' +
                                '<b>Agreed Due Date</b>: {{selectedClaim.memberName}}' +                     
                            '</td>'+
                            '<td class="gridlayout-data-table-value">' +
                                '<span class="gridlayout-data-item-title">{{selectedClaim.memberEmail}}</span>' +
                                '<div class="icon ion-at gridlayout-item-status"></div>'+                       
                            '</td>'+
                        '</tr>' +
                    '</tbody>' +
                 '</table>' +
            '</ion-content>' +
        '</ion-popover-view>';

        $scope.popoverTemplate = '<ion-popover-view class="claimsprocessing-popover">' +
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
                            '<span class="gridlayout-data-item-title">{{selectedClaim.memberTelephoneNumber}}</span>' +
                            '<div class="icon ion-android-call gridlayout-item-status"></div>'+                       
                        '</td>'+
                    '</tr>' +
                    '<tr class="gridlayout-data-table-row-alternate">' +
                        '<td class="gridlayout-data-table-value">' +
                            '<span class="gridlayout-data-item-title">{{selectedClaim.memberEmail}}</span>' +
                            '<div class="icon ion-at gridlayout-item-status"></div>'+                       
                        '</td>'+
                    '</tr>' +
                '</tbody>' +
            '</table>' +
            '</ion-content>' +
        '</ion-popover-view>';

        $scope.claimPopover = $ionicPopover.fromTemplate($scope.popoverTemplate2, {
            scope: $scope,
            animation: 'am-fade-and-slide-in-up',
            controllerAs:'$ctrl'
        });

        $scope.showContactDetails = function(claim, event){
            $scope.selectedClaim = claim;
            $scope.claimPopover.show(event);
        }
    }
}

export default ClaimsProcessingController;