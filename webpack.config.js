const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'animal-api.js',
    libraryExport: 'default',
    library: 'AnimalApi',
    libraryTarget: 'umd',
  },
  mode: 'production',
};
