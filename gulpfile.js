const gulp = require("gulp");
const jsBeautify = require("gulp-jsbeautifier");
const htmlBeautify = require("gulp-html-beautify");
const nunjucksRender = require("gulp-nunjucks-render");

const compileHtml = () => {
    return gulp
        .src("src/views/!(layout.html)*", { nodir: true })
        .pipe(
            nunjucksRender({
                path: ["src/views"],
            })
        )
        .pipe(htmlBeautify({ max_preserve_newlines: 1 }))
        .pipe(gulp.dest("dist", { overwrite: true }));
};

const compileJs = () => {
    return gulp
        .src("public/scripts/**")
        .pipe(jsBeautify())
        .pipe(gulp.dest("dist/scripts", { overwrite: true }));
};

const compileCss = () => {
    return gulp
        .src("public/styles/style.css", { nodir: true })
        .pipe(gulp.dest("dist/styles", { overwrite: true }));
};

const compileAssets = () => {
    return gulp
        .src("public/assets/**")
        .pipe(gulp.dest("dist/assets", { overwrite: true }));
};

gulp.task("compileJs", compileJs);
gulp.task("compileCss", compileCss);
gulp.task("compileHtml", compileHtml);
gulp.task("compileAssets", compileAssets);
