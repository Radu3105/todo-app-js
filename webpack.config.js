const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/, // This regex matches any CSS files
                use: [
                    'style-loader',// Second step:  Inject styles into DOM (using <style>)
                    'css-loader' // First step: Turns css into commonjs
                ],
            },
        ],
    },
};
