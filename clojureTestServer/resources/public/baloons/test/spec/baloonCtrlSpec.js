describe('Baloon Ctrl', function() {
     var controller;
     var scope;


     beforeEach(inject(function($controller, $rootScope,$compile) {
         scope = $rootScope;

         controller = $controller('BaloonCtrl', {
             $scope : scope,
         });

         
    }));

    it('should add up', function() {
        scope.unitPrice = 2;
        scope.number = 4;

        expect(scope.total()).toEqual(8);
    });

});
