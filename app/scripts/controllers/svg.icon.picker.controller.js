angular.module('umbraco').controller('SvgIconPickerController', function($scope) {
	
	if ($scope.model.value === undefined || $scope.model.value === null) {
		$scope.model.value = "";
	}

	var svgLink = $scope.model.config.svgPath + "?r=" + (new Date()).getTime();

	$scope.getSvgLink = function(symbol) {
		return svgLink + "#" + symbol;
	};

	$scope.openSvgIconPicker = function () {
		$scope.svgIconPickerOverlay = {
			view: "/App_Plugins/SvgIconPicker/views/svg.icon.picker.dialog.html",
			show: true,
			svgLink: svgLink,
			selected: $scope.model.value,
			submit: function (model) {
				
				if (model.icon) {
					$scope.model.value = model.icon;
				}

				$scope.svgIconPickerOverlay.show = false;
				$scope.svgIconPickerOverlay = null;
			},
			close: function () {
				$scope.svgIconPickerOverlay.show = false;
				$scope.svgIconPickerOverlay = null;
			}
		};
	};
	
});