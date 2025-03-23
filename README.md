# Animal API

## 简易公共库开发demo

### 外部依赖请求库axios

``` bash
npm i --save axios
```

### jest单元测试

``` bash
npm i --save-dev jest babel-jest @babel/core @babel/preset-env
```

``` js
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### 编译UMD支持script标签引入

``` bash 
npm i --save-dev @babel/plugin-transform-modules-umd @babel/core @babel/cli
```

``` js
// babel.config.js
module.exports = {
  // ...
  plugins: [
    [
      '@babel/plugin-transform-modules-umd',
      {
        exactGlobals: true,
        globals: {
          index: 'AnimalApi',
        },
      },
    ],
  ],
}
```

### 解决兼容ESM特性挂载在default上的引用差异

``` bash
npm i --save-dev webpack webpack-cli
```

``` js
// webpack.config.js
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
···