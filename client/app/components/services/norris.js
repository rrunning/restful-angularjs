import angular from 'angular';

let norrisModule = angular.module('about.norris', [])
	.factory('Norris', Norris)
	.name;
	// api is at http://www.icndb.com/api/

	function Norris($http) {
		const service = {
			test: () => {
				alert("hello World");
			},
			grabJoke: () => {
				return $http.get('http://api.icndb.com/jokes/random');
			},
		}
		return service;
	}

	Norris.$inject = ['$http'];
	export default norrisModule;
