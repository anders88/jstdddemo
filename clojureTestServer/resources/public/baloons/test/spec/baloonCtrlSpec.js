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

    it('should compute unit price by calling service', function() {
        scope.color = "red";
        var prices = [];
        prices["rest/getPrice?color=red"] = 15;
        scope.getService = function(addr,callback) {
            callback({
                price: prices[addr]
            });
        }
        scope.pickedColor();
        expect(scope.unitPrice).toEqual(15);
    });

});
