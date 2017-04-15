var path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {


        rules: [
   {
     test: /\.(js|jsx)$/, //Check for all js files
     exclude: /node_modules/,
     use: [{
       loader: 'babel-loader',
       options: { presets: ['es2015','react'] }
     }]
   }
 ]
    }
};
