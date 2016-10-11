let u = require('uglify-js'),
    fs = require('fs')

let result = u.minify([
    'node_modules/screenfull/dist/screenfull.js',
    'node_modules/feather-ts/feather.min.js',
    'dist/diorama.js'], {
    compress: {
        drop_debugger: true,
        passes: 1
    },
    "screw-ie8": true
})

fs.writeFileSync('dist/diorama.min.js', result.code, 'utf8')
