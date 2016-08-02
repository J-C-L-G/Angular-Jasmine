/**
 * Created by JCLG on 7/31/2016.
 */

(function(){
   'use strict';

    //Create the module and defined its dependencies.
    var app = angular.module('app',['ngRoute']);

    //Config always runs before the services are ready.
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            // .when('/',{templateUrl : 'app/Expense/expense.html', controller : 'expensesController'})
            .when('/',{templateUrl : 'app/Expense/expense.html', controller : 'expensesController', controllerAs : 'ctrl'})
            .when('/admin',{templateUrl : 'app/Admin/admin.html'})
            .otherwise({redirectTo : '/'});
    }]);
})();