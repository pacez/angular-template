/*
 * Author: Pace Zhong
 * Date: 2015-01-17
 * desc: simpleMap webApp
 */

define(['angular','$'], function(angular,$) {
  var app=angular.module('app', []);
  app.controller('app-controller',function($scope){
    $scope.name="test";
  });
  return app;
});
