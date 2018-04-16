/* 
* @Author: Marte
* @Date:   2018-04-04 16:38:01
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-08 11:46:13
*/
let gulp=require('gulp');//得到一个对象
let sass=require('gulp-sass');//得到一个函数
//创建任务
gulp.task('compileSass',function(){
    //查找sass文件所在目录
    gulp.src('./src/sass/*.scss')//返回文件流
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('jtsass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass']);
})