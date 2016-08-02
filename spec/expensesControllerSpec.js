/**
 * Created by JCLG on 7/31/2016.
 */

'use strict';

describe('expensesController',function(){

    //Setup to bring the controller
    var $controllerConstructor,
        scope;

    //Before each test we fetch the main module.
    beforeEach(module('app'));

    // inject function provided by angular-mock
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        //scope = $rootScope.$new();
    }));

    it('should have 3 expense items',function(){
        //Now we create a instance of the controller that we need by passing the name
        // and assigning the controller's scope to the out test scope.
        var ctrl = $controllerConstructor('expensesController'/*,{$scope : scope}*/);
        expect(ctrl.expenseItems.length).toBe(3);
    });
});