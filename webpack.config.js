// This file tells how to minify/bundle files
const path = require("path");

module.exports = {
    entry: './src/inde.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
}