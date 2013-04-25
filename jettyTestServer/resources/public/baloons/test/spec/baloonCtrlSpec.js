describe('Baloon Ctrl', function() {
     var controller;
     var scope;


     beforeEach(inject(function($controller, $rootScope,$compile) {
         scope = $rootScope;

         controller = $controller('BaloonCtrl', {
             $scope : scope,
         });

         this.template = $('#buyBaloons').html();
         console.log(this.template);
         
         this.wrapper = $('<div>');
         $('body').append(this.wrapper);

          var element = angular.element(this.template);
          $compile(element.contents())(scope);
           this.wrapper.append(element);  
           //console.log(this.wrapper);
    }));

    it('should add up', function() {
        scope.unitPrice = 2;
        scope.number = 4;

        expect(scope.total()).toEqual(8);
    });

    it('should display price', function() {
        //console.log(this.wrapper.find("#totalLabel").html());
        scope.unitPrice = 2;
        scope.number = 4;

    });
});
