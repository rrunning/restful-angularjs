import template from './jokes.html';
import controller from './jokes.controller';
import './jokes.scss';

let homeComponent = {
	bindings: {
		firstJoke: '<'
	},
	template,
	controller
};

export default homeComponent;
