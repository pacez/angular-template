var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'),            // less
    minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'),        // js压缩
    concat = require('gulp-concat'),        // 合并文件
    rename = require('gulp-rename'),        // 重命名
    clean = require('gulp-clean');          //清空文件夹


//开发阶段定义输出路径

var buildPath={
  css:'build/static/css',
  less:'build/static/css/less',
  lib:'build/static/js/lib',
  bower:'build/bower_components',
  bowerFiles: function(){
    var that=this;
    return [
      that.bower+'/angular/angular.js',
      that.bower+'/angular-route/angular-route.js',
      that.bower+'/jquery/dist/jquery.js',
      that.bower+'/requirejs/require.js'
    ];
  }
};

//清除lib目录
gulp.task('clean-build',function(){
  gulp.src([buildPath.lib+'/*',buildPath.css+'/*.css']).pipe(clean());
})

//拷贝并压缩bower构建的基础js库到lib文件夹下
gulp.task('bower-to-lib',function(){
  gulp.src(buildPath.bowerFiles()).pipe(gulp.dest(buildPath.lib));
});

//需要编译的less文件
var lessFiles=[
  buildPath.less+'/*.less',
  '!'+buildPath.less+'/normalize.less'
]

//编译less,除normalize以外的less都进行编译
gulp.task('build-less',function(){
  gulp.src(lessFiles).pipe(less()).on('error',function(e){console.log(e)}).pipe(gulp.dest(buildPath.css+"/"));
});

//监控文件变化
gulp.task('watch',function(){
  gulp.watch(lessFiles,['build-less']);
});

//构建开发任务
gulp.task('dev',['clean-build','bower-to-lib','watch'],function(){})


//需要发布的文件
var releaseFile=[
  'build/**/*',
  '!build/bower_components',
  '!build/bower_components/**/*',
  '!build/static/css/less',
  '!build/static/css/less/**/*'
]


//生成release版本
gulp.task('clean-release',function(){
  //清理release目录
  gulp.src('release').pipe(clean());
});

gulp.task('release',['clean-release'],function(){
  //拷贝输出文件到release文件夹
  gulp.src(releaseFile).on('error',function(e){console.log(e)}).pipe(gulp.dest('release/')).on('error',function(e){console.log(e)});
});


