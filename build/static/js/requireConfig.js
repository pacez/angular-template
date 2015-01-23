/*
* root path: js/app/main/main.js
* lib: 基础库
* model: angular模块
* main: 程序入口配置在页面中
*/

var bowerLibs='../../lib/',
    customModel='../../app/model/',
    requireConfig={
      paths: {
        angular: bowerLibs+'angular',
        $: bowerLibs+'jquery',
        map: customModel+'simpleMap'
      },
      shim: {
        angular: {
          exports: 'angular'
        }
      }
    };
