/**
 * Created by JCLG on 7/31/2016.
 */

(function(){
    'use strict';

    angular.module('app')
/*
        .controller('expensesController',['$scope',function($scope){
            $scope.activate = activate;
            $scope.expenseItems = [];
            activate();
            function activate(){
                $scope.expenseItems = [
                    {title : 'Taxi', description : 'To Airport', amount : 89.95},
                    {title : 'Lunch', description : 'At Airport', amount : 15.40},
                    {title : 'Coffee', description : 'Starbucks', amount : 4.93}
                ];
            }
        }]);
*/
        .controller('expensesController',['expensesDataService',expensesController]);
    
            function expensesController(expensesDataService){
                var viewModel = this;
                viewModel.activate = activate;
                viewModel.expenseItems = [];
                activate();
                function activate(){
                    return viewModel.expenseItems = expensesDataService.getExpenses();
                }
            }
})();