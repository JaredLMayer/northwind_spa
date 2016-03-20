var spaModule = angular.module('spa', []);

spaModule.controller('SpaController', function($scope, $http){
	$scope.listAppointments = function(){
		$http.get('/api/appointments')
		.then(function(res){
			return res.data;
		})
		.then(function(appointments){
			$scope.appointments = appointments;
			$scope.newName = "";
			$scope.newPriority = "";
		})
		.catch(console.error.bind(console));
	};
});