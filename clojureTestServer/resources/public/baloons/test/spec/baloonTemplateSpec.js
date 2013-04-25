describe('Baloon Template', function() {
     var controller;
     var scope;


     beforeEach(inject(function($controller, $rootScope,$compile) {
         scope = $rootScope;

         controller = $controller('BaloonCtrl', {
             $scope : scope,
         });

         this.template = $('#buyBaloons').html();
         
         this.wrapper = $('<div>');
         $('body').append(this.wrapper);

          var element = angular.element(this.template);
          $compile(element.contents())(scope);
           this.wrapper.append(element);  
           scope.$digest();
    }));

      afterEach(function() {
         this.wrapper.remove();
      }); 


    it('should display price', function() {
        scope.unitPrice = 2;
        scope.number = 4;
        scope.$digest();

        expect(this.wrapper.find("#totalLabel").html()).toEqual("Total: 8");
    });
});
