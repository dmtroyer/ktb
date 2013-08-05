'use strict';

/* App Module */

angular.module('ktb',['ktb.controllers', 'ktb.filters', 'ktb.services']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/splash.html'}).
      when('/panels', {templateUrl: 'partials/panel-list.html', controller: "PanelListCtrl"}).
      when('/panels/:panelId', {templateUrl: 'partials/panel-detail.html', controller: "PanelDetailCtrl"});
});
