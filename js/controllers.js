'use strict';

/* Controllers */

angular.module('ktb.controllers', []).
  controller('PanelListCtrl', ['$scope', 'Panels', function($scope, Panels) {
    $scope.panels = Panels.query(function() {
      $scope.panels.installed_panel_set.map(function(panel) {
        delete panel.pnl_pk;
        panel.image = panelImageUrl(panel.pnl_id);
        return panel;
      });
    });
  }]).
  controller('PanelDetailCtrl', ['$scope', '$routeParams', 'Panel', function($scope, $routeParams, Panel) {
    var panel = Panel.get({panelId:$routeParams.panelId}, function() {
      panel.image = panelImageUrl(panel.pnl_id);
      panel.story = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget risus id urna sollicitudin facilisis. Proin et blandit turpis. Fusce ornare lobortis est, id viverra eros convallis a. Aenean blandit ipsum quis condimentum vestibulum. Nulla non metus leo. Suspendisse eu gravida nunc, eu commodo turpis. Sed vitae euismod neque.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc et velit posuere neque interdum semper. Mauris faucibus lectus rhoncus quam laoreet, id mollis enim tristique. Quisque sit amet nulla eget dui tempus malesuada a at risus. Integer in massa non quam adipiscing congue. Nullam condimentum erat in mauris ultrices, non posuere turpis feugiat. Suspendisse at velit commodo, condimentum purus eget, malesuada lorem. Duis vel ante hendrerit, tincidunt lacus id, tempus odio. Sed vehicula eget erat ut lacinia. Vivamus eget porta magna, at venenatis purus. Praesent elementum orci eget enim ultrices dignissim scelerisque vitae turpis.</p>";
    });
    $scope.panel = panel;
  }]).
  controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.submit = function () {
      $scope.search = this.search;
      $location.url('panels');
    };

    $scope.updateScope = function () {
      $scope.search = this.search;
    };
  }]);

// private

function panelImageUrl(id) {
  return "http://www.knitthebridge.com/ktb-photos/panels/0/" + id + "/" + id + "_main.jpeg";
}
