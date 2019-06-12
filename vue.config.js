// const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV === 'development' ? 'devdist' : 'dists',
  lintOnSave: false,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: "8181",
    proxy: {
        '/api': {
            target: 'http://www.lcpsy.cn/test/public/index.php/',  // target host
            ws: true,  // proxy websockets 
            changeOrigin: true,  // needed for virtual hosted sites
            pathRewrite: {
                '^/api': ''  // rewrite path
            }
        },
    }
  }
}
