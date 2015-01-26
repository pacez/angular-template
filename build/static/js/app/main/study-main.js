/*
require.config(requireConfig);

require(['route'], function() {
 var app = angular.module('app', ['ngRoute']);
  app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
    when('/view', {
      templateUrl: '/static/view/view.html',
      controller: 'app-controller'
    })
  }]).controller('app-controller', function($scope) {
    $scope.name = "test";
    $scope.customer = {
      author: 'Pace Zhong',
      JobTitle: 'Senior Front-end Developer',
      view: 'This is a view'
    };
    $scope.view = {
      title: 'This is a view',
      list: [
        {name: 'Pace'},
        {name: 'Nancy'},
        {name: 'Alice'},
        {name: 'Kris'},
        {name: 'Kevin'}
      ]
    };

  }).directive('directive', function() {
    return {
      template: 'Author: {{customer.author}} <br/> Job Title: {{customer.JobTitle}}'
    };
  })

});
*/
var app = angular.module('app', ['ngRoute']);
  app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
    when('/view', {
      templateUrl: '/static/view/view.html',
      controller: 'app-controller'
    })
  }]).controller('app-controller', function($scope) {
    $scope.name = "test";
    $scope.customer = {
      author: 'Pace Zhong',
      JobTitle: 'Senior Front-end Developer',
      view: 'This is a view'
    };
    $scope.view = {
      title: 'This is a view',
      list: [
        {name: 'Pace'},
        {name: 'Nancy'},
        {name: 'Alice'},
        {name: 'Kris'},
        {name: 'Kevin'}
      ]
    };

  }).directive('directive', function() {
    return {
      template: 'Author: {{customer.author}} <br/> Job Title: {{customer.JobTitle}}'
    };
  })
