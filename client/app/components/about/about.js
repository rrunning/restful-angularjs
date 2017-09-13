import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutComponent from './about.component';
import Services from '../services';

let aboutModule = angular.module('about', [
  uiRouter,
  Services,
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about'
      });
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(true).hashPrefix('!');
  })

.component('about', AboutComponent)

.name;

export default aboutModule;
