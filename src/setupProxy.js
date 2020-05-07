/*
 * @描述: 代理
 * @创建者: 张莹
 * @Date: 2020-04-27 21:07:08
 * @修改者: 张莹
 * @LastEditTime: 2020-05-05 13:09:12
 * @最后修改时间:  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */
const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/api",createProxyMiddleware({
        target:"https://show.maoyan.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}