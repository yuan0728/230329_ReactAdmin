const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,//自动打包相关样式
    }),
    //使用less-loader 对原码总的less的变量进行重新指定
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: 
        { 
            dark: true,
            'colorPrimary': '#00b96b',
            'link-color': '#009688',
            'text-color': '#666666',
            'error-color': '#f56c6c',
            'success-color': '#1b733e',
            'waring-color': '#ffd00b',
            'heading-color': '#272933',
        },//修改主题的颜色
    }),
);