angular.module('umbraco').controller('SvgIconPickerDialogController', function ($scope, $http, localizationService) {
	
	if (!$scope.model.title) {
		$scope.model.title = localizationService.localize("defaultdialogs_selectIcon");
	}

	var svgLink = $scope.model.svgLink;

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

	$scope.selectIcon = function (icon) {
		$scope.model.icon = icon;
		$scope.submitForm($scope.model);
	};
});