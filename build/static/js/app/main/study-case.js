//require的全局配置，每一个应用中都需要进行配置
require.config(requireConfig);

//定义应用，加载需要的各种依赖
require(['map'], function(app) {
  app.controller('app-controller',function($scope){
    $scope.name="test"
  })
});
