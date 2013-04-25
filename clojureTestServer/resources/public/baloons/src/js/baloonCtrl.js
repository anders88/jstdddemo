function BaloonCtrl($scope) {
	$scope.unitPrice = 2;
	$scope.number = 0;

	$scope.total = function() {		
		return $scope.unitPrice * $scope.number;
		
	};
}