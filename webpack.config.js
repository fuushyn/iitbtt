const path = require('path');

module.exports = { 
  "mode": "none", 
  "entry": "./src/index.js", 
  "output": { 
    "path": path.resolve(__dirname, 'dist'), 
    "filename": "bundle.js" 
  },
  experiments: {
    topLevelAwait: true
  },
  
  devServer: { 
    static: {
      directory: path.join(__dirname, "./dist")
    },

  },
  "module": { 
    "rules": [ { 
      "test": /\.css$/, 
      "use": [ "style-loader", "css-loader" ] 
    }, 
    { 
      "test": /\.js$/, 
      "exclude": /node_modules/, 
      "use": { 
        "loader": "babel-loader", 
        "options": { 
          "presets": [ "@babel/preset-env", ] 
        } 
      } 
    }, 
  ] }  

}
