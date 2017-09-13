import angular from 'angular';

let itemModule = angular.module('about.item', [])
	.factory('Item', Item)
	.name;

function Item($http) {
	const service = {
		test: () => {
			// alert("Hello World");
		},
		list: () => {
			return $http.get('http://secret-escarpment-99471.herokuapp.com/item');
		},
		add: (itemInput) => {
			return $http.post('http://secret-escarpment-99471.herokuapp.com/item', itemInput);
		},
		remove: (id) => {
			return $http.delete('http://secret-escarpment-99471.herokuapp.com/item/' + id);
		},
		edit: (item) => {
			return $http.put('http://secret-escarpment-99471.herokuapp.com/item/' + item.id, item);
		},
	}
	return service;
}
Item.$inject = ['$http'];
export default itemModule;