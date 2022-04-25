# react-zero
从零开始搭建 react 项目



## `react + typescript + webpack`
基础项目搭建

- `index.html + App.tsx` 创建模板文件和入口文件
- `webpack.config.js + tsconfig.json` 项目构建
  - `ts-loader` 处理 `jsx`
  - `tsconfig.json` 添加 `"jsx": "react-jsx"`



## `babel`
`react + typescript + webpack + babel` 编译

> [Using Babel with TypeScript](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)

ℹ️**注意：** 通过 `babel-loader` 替换 `ts-loader` 编译 `typescript`

```shell
# 一定要替换 ts-loader, 如果没有安装 ts-loader 可忽略
yarn remove ts-loader
# 然后按住 babel 相关依赖
yarn add --dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
```

```js
// webpack.config.js
module: {
  rules: [
    { test: /\.tsx?$/, loader: "babel-loader" }
  ]
}
...
```

```js
// babel.config.js 需要时，请为 plugins 单独安装依赖
module.exports = {
  "presets": ["@babel/react", "@babel/typescript", ["@babel/env", { "modules": false }]],
  "plugins": ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"]
}
```



## `react-router-dom`
新增路由

- `webpack-dev-server` 快速搭建本地开发服务
- `path alias` 配置路径别名
- `html-webpack-plugin` 简化 html 文件创建
- `react-router-dom` 新增路由



> [Create React App 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)
