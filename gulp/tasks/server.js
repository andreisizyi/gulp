export const server = (done) => {
    app.plugins.browsersync.init({
        watch: true,
        proxy: "gulp.test",
        baseDir: "./",
        open: true,
        keepalive:true,
        files: [
            {
                match: ['./**/*.php'],
                fn: function (event, file) {
                    app.plugins.browsersync.reload({stream: false});
                    done();
                }
            }
        ]
    })
}