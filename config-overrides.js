const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { getLessVars } = require('antd-theme-generator');
const path = require("path");

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        modifyVars: getLessVars(path.join(__dirname, './src/styles/vars.less')),
        javascriptEnabled: true,
    }),
);