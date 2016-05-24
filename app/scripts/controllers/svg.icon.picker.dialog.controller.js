angular.module('umbraco').controller('SvgIconPickerDialogController', function($scope, $http) {

	var svgLink = $scope.dialogData.svgLink;

	$scope.getSvgLink = function(symbol) {
		return svgLink + "#" + symbol;
	};


	$http.get(svgLink).then(function(response) {

		// get svg source code
		var svg = angular.element(response.data);

		// empty icon array
		$scope.icons = [];

		// loop through svg icons
		angular.forEach(svg.find("symbol"), function(symbol) {
			$scope.icons.push(angular.element(symbol).attr("id"));
		});

	});

    $scope.submitClass = function (icon) {
		$scope.submit(icon);
	};
});

