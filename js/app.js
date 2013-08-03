'use strict';

/* App Module */

var ktb = angular.module('ktb',['ktb.filters', 'ktb.services.panels']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/splash.html'}).
      when('/panels', {templateUrl: 'partials/panel-list.html', controller: "PanelListCtrl"}).
      when('/panels/:panelId', {templateUrl: 'partials/panel-detail.html', controller: "PanelDetailCtrl"});
}]);
