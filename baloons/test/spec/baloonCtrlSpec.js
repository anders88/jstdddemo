describe('Baloon Ctrl', function() {
     var controller;
     var scope;


     beforeEach(inject(function($controller, $rootScope) {
         scope = $rootScope;

         controller = $controller('BaloonCtrl', {
             $scope : scope,
         });

         this.template = $('#chooseCar [ng-controller="ChooseCarCtrl"]').html();
         this.wrapper = $('<div>');
         $('body').append(this.wrapper);

          var element = angular.element(this.template);
          compile(element.contents())(scope);
           this.wrapper.append(element);  

    }));

    it('should add up', function() {
        scope.unitPrice = 2;
        scope.number = 4;

        expect(scope.total()).toEqual(8);
    });

    it('should', function() {
        var b = $("#aheader")
        var a="df";
    });
});
