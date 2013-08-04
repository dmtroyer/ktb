'use strict';

/* Services */

angular.module('ktb.services.panels', ['ngResource']).
  factory('Panels', function($resource) {
    return $resource('ktb-pub/installedPanelsFiltered.json', {}, {
      query: { method: 'GET', isArray: false }
    });
  }).
  factory('Panel', function($resource) {
    return $resource('ktb-pub/PanelInfo.:panelId.json');
  });
