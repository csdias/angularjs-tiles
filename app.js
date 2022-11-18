import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

// Import your app stylesheets
import './style.css';

// Import your app functionality
//import './home';
import './tiles';

// Create and bootstrap application
//const requires = ['ui.router', 'home', 'ngMaterial', 'ngMessages'];
const requires = ['ui.router', 'tiles', 'ngMaterial', 'ngMessages'];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);
