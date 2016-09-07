// 引入gulp及各种组件 

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminOptipng = require('imagemin-optipng');
const rollup = require('gulp-rollup');
const gulpBrowser = require("gulp-browser");

const filePath = {
    srcScript: './src/js/**/*.main.js',
    dstScript: './dist/js',

    srcSass: './src/scss/**/*.{sass,scss}',
    dstSass: './dist/css',

    srcCss: './src/css/**/*.css',
    dstCss: './dist/css/',

    srcImg: './src/images/*.*',
    dstImg: './dist/images',

    srcHtml: './src/html/*.html',
    dstHtml: './dist/html',

    srcStatic: './src/static/**/*.*',
    dstStatic: './dist/static'

}

var transforms = [
    {
        transform: "babelify",
        options: { presets: ["es2015"] }
    }
];

//命令行使用gulp script启用此任务;
gulp.task('script', () => {
    gulp.src(filePath.srcScript)
        .pipe(rollup({
            //    entry: filePath.srcScript,
            //    sourceMap: true
           }))
		.pipe(gulpBrowser.browserify(transforms))
		// .pipe(uglify())
		.pipe(gulp.dest(filePath.dstScript));
});

//命令行使用gulp sass启用此任务;
gulp.task('sass', () => {
    gulp.src(filePath.srcSass)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(filePath.dstSass));
});

//命令行使用gulp css启用此任务;
gulp.task('css', () => {
    gulp.src(filePath.srcCss)
        .pipe(minifyCss())
        .pipe(gulp.dest(filePath.dstCss));
});

//图片压缩任务,支持JPEG、PNG及GIF文件;

//命令行使用gulp jpgmin启用此任务;

gulp.task('imgmin', function () {
    var jpgmin = imageminJpegRecompress({
        accurate: true,//高精度模式
        quality: "high",//图像质量:low, medium, high and veryhigh;
        method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
        min: 70,//最低质量
        loops: 0,//循环尝试次数, 默认为6;
        progressive: false,//基线优化
        subsample: "default"//子采样:default, disable;
    }),
    pngmin = imageminOptipng({
        optimizationLevel: 4
    });

    gulp.src(filePath.srcImg)
        .pipe(imagemin({
            use: [jpgmin, pngmin]
        }))
        .pipe(gulp.dest(filePath.dstImg));

});

gulp.task('html', () => {
    gulp.src(filePath.srcHtml)
        .pipe(gulp.dest(filePath.dstHtml))
});

gulp.task('static', () => {
    gulp.src(filePath.srcStatic)
        .pipe(gulp.dest(filePath.dstStatic))
});

gulp.task('watch', () => {
    gulp.watch(filePath.srcScript, ['script']);
    gulp.watch(filePath.srcCss, ['css']);
    gulp.watch(filePath.srcSass, ['sass']);
    gulp.watch(filePath.srcImg, ['imgmin']);
    gulp.watch(filePath.srcHtml, ['html']);
    gulp.watch(filePath.srcStatic, ['static']);
});

gulp.task('default', ['script', 'css', 'sass', 'imgmin', 'html', 'static', 'watch']);



