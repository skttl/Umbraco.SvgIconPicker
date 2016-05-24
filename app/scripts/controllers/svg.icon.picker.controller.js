angular.module('umbraco').controller('SvgIconPickerController', function($scope, dialogService) {
  console.log('Hellos from SvgIconPickerController');

  if ($scope.model.value === undefined || $scope.model.value === null) {
  	$scope.model.value = "";
  }

  var svgLink = $scope.model.config.svgPath + "?r=" + (new Date()).getTime();

  $scope.getSvgLink = function(symbol) {
  	return svgLink + "#" + symbol;
  };

  $scope.openIconPickerDialog = function() {
  	console.log("clicked");
  	dialogService.open({
  		template: "/App_Plugins/SvgIconPicker/views/svg.icon.picker.dialog.html",
  		dialogData: {
  			"svgLink": svgLink,
  			"selected": $scope.model.value
  		},
  		callback: function (value) {
  			if (value !== null && value !== "") {
  				$scope.model.value = value;
  			}
  		}
  	});
  };

});

