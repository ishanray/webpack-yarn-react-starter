module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /(node_modules|bower_components)/,
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ]
    }
};
