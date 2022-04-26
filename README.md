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



## 开发

- `ESLint` JS 代码规范校验
- `stylelint` 样式代码规范校验
- `husky + lint-staged + prettier + eslint` 自动代码校验和格式化
- 单步调试

> [通过 husky + lint-staged 实现在 Git 提交前进行文件美化和代码校验](https://youtiao66.github.io/blog/husky-lint-staged-prettier-eslint/)

> [💪严格但是不严苛的编码规范](https://github.com/umijs/fabric)

> [在 VS Code 中调试 Vue](https://youtiao66.github.io/blog/debug-vue-in-vscode/)



## 样式和静态资源 
样式和静态资源

- `style-loader` 把样式插入 DOM 结构中
- `css-loader` 解释 `@import` 和 `url()`
- `postcss-loader + postcss + autoprefix` 样式处理和自动添加前缀
- `less-loader + less` 编译 less
- `url-loader` 把代码中依赖的文件转换为 URL
- `copy-webpack-plugin` 处理静态资源
- TODO: Code Splitting



> [Create React App 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)
