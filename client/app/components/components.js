import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Jokes from './jokes/jokes';

let componentModule = angular.module('app.components', [
	Home,
	About,
	Jokes,
])

	.name;

export default componentModule;
