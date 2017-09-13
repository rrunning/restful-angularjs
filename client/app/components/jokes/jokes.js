import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jokesComponent from './jokes.component';

const jokesModule = angular.module('jokes', [
  uiRouter
])

.component('jokes', jokesComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('jokes', {
      url: '/jokes',
      component: 'jokes',
      resolve: {
        firstJoke: (Norris) => {
          return Norris.grabJoke().then(response => {
            return response.data.value.joke;
          });
        }
      }
    });
})
  
.name;

export default jokesModule;
