const path = require("path");

module.exports = {
  mode: "development", //we are building for development mode
  // this is how we export in node.js enviroment
  entry: "./src/app.ts", // file that our project starts
  output: {
    // where is stored our final file
    filename: "bundle.js", //the name of your final file, you can add dinamic content for example bundle.[contenthash].js
    path: path.resolve(__dirname, "dist"), // build an obsolute path to a certain folder, **dirname is globally available
    publicPath: "dist",
  },
  devtool: "inline-source-map", // There will be generated source maps already which it sould extract and basically wire up correctly to the bundle it generates
  module: {
    // configuration to tranlate our TS files
    rules: [
      {
        test: /\.ts$/, //checks for files that ends with .ts
        use: "ts-loader", //what to do to these files. Each TS file must be handled by the ts-loader
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    //here, we tell webpack which file extensions it adds to the imports it finds, by default JS files
    extensions: [".ts", ".js"],
  },
};
