class JokesController {
	constructor(Norris) {
		this.Norris = Norris;
		this.newJoke = '';
	}
	fetchJoke() {
		this.Norris.grabJoke().then(response => {
			this.newJoke = response.data.value.joke;
		});
	}
}

JokesController.$inject = ['Norris'];

export default JokesController;
