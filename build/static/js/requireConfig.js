/*
* root path: js/app/main/main.js
* lib: 基础库
* model: angular模块
* main: 程序入口配置在页面中
*/

var staticPath={
  'lib':'../../lib/',
  'model': '../../app/model/'
}

var requireConfig={
      'paths': {
        'angular': staticPath.lib+'angular.min',
        'route': staticPath.lib+'angular-route.min',
        '$': staticPath.lib+'jquery.min',
        'studyModel': staticPath.model+'study-model'
      },
      'shim': {
        'route': {
          'export':'route'
        }
      }
    };
