
var app = angular.module('app',[]);
app.config(function($locationProvider, $routeProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: 'partials/index', controller: 'ctrl' })
    .when('/about', { templateUrl: 'partials/about', controller: 'ctrl' })
    .otherwise({redirectTo:'/'});
});
 
app.controller('ctrl', function($scope,$http){
    $http.get('/account').success(function(data) {
      $scope.userData = data.user;
    });
    
    $scope.message='Welcome! Please log in.';
});