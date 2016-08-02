/**
 * Created by JCLG on 7/31/2016.
 */
(function(){
    'use strict';
    angular.module('app')
        .factory('expensesDataService',['$http',expensesDataService]);

    function expensesDataService($http){
        return  {
            getExpenses : function(){
                return [
                    new ExpenseItem('Taxi','To airport',89.95),
                    new ExpenseItem('Lunch','At airport',15.40),
                    new ExpenseItem('Coffee','Starbucks',4.93)
                ];
            },
            persistExpenses : function(reportExpenses){
                var success = true;
                if(success){
                    reportExpenses();
                }
            }
        };
    }
})();