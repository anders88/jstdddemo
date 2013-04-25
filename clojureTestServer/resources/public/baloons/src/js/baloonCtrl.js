function BaloonCtrl($scope) {
	$scope.unitPrice = 2;
	$scope.number = 0;

	$scope.total = function() {		
		return $scope.unitPrice * $scope.number;
		
	};

	$scope.pickedColor = function() {
		$scope.getService("rest/getPrice?color=" + $scope.color,function(response) {
			$scope.unitPrice = response.price;
		});
	}

	$scope.getService = function(color,callback) {
		alert("This is not implemented");
	}
}