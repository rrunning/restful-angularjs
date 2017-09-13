import angular from 'angular';
import Item from './item';
import Norris from './norris';

let commonModule = angular.module('about.services', [
	Item,
	Norris,
])
	.name;

export default commonModule;
