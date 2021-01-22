const fs = require('fs-extra');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * Retrieve the config file.
 */
function getFoundryConfig() {
  const configPath = path.resolve(process.cwd(), 'foundryconfig.json');
  let config;

  if (fs.existsSync(configPath)) {
      config = fs.readJSONSync(configPath);
      return config;
  }
}

module.exports = (env, argv) => {
  let config = {
    mode: 'none',
    entry: "./src/index.js",
    plugins: [
      new CleanWebpackPlugin( { cleanStaleWebpackAssets: false }),
      new CopyPlugin({
        patterns: [
          { from: 'static', to: 'static'},
          { from: 'module.json', to: 'module.json'}
        ]
      }
      ),
    ],
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
  };

  // Copy files to configured data path
  const foundryConfig = getFoundryConfig();

  if (foundryConfig !== undefined && argv.mode !== 'production') {
    config.output.path = path.join(foundryConfig.dataPath, 'Data', 'modules', 'foundryvtt-pf2e-lang-es');

    console.log(`Path: ${config.output.path}`);
  }

  if (argv.mode === 'production') {
    console.log(`Production build.`);    
  } else {
    console.log(`Dev build.`);
    config.devtool = 'inline-source-map';
    config.watch = true;
  }

  return config;
};
