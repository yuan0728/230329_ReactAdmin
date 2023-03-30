笔记：
git 拉取代码：git pull origin dev
git 克隆代码：git clone + 代码路径 
例如：git clone https://github.com/yuan0728/230329_ReactAdmin.git
从远程的dev分支生成本地的dev分支：git checkout -b dev origin/dev
下载组件库包：
    yarn add antd
### 实现组件的按需打包
    1、下载依赖模块：
        yarn add react-app-rewired customize-cra babel-plugin-import
    2、定义加载配置的js模块：config-overrides.js
        const {override,fixBabelImports} = require('customize-cra')
### 自定义 antd主题
    下载工具包：
        yarn add less less-loader
    下载路由包: react-router-dom
### 路由
react-router-dom@6中的Routes组件取代了Switch组件。此外，Route组件API也发生了变化，不再使用component、render和children函数属性，而是使用单个element属性，该属性取React.ReactNode（又名JSX）值
    