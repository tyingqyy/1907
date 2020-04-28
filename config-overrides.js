/*
 * @描述: 
 * @创建者: 张莹
 * @Date: 2020-04-27 21:24:59
 * @修改者: 张莹
 * @LastEditTime: 2020-04-27 21:27:16
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);
