/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 12:02:56
 * @LastEditTime: 2020-07-14 17:40:37
 * @LastEditors: Duchin/梁达钦
 */
'use strict'
const path = require('path')
function resolve (dir) {
  // path.join(__dirname)设置绝对路径
  return path.join(__dirname, dir)
}

const name = 'vue-ts-ls'
const port = 8090

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    // 让浏览器 overlay 同时显示警告和错误
    overlay: {
      warnings: false,
      errors: true
    },
    // 端口号
    port: port,
    // 配置自动启动浏览器
    open: true
    // proxy: {
    //   '/api': {
    //     target: 'http://172.2.2.2',
    //     changeOrigin: true,
    //     ws: true,
    //     secure: false
    //   }
    // }
  },
  configureWebpack: {
    name: name,
    externals: {
      API_BASE_URL: 'API_BASE_URL'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('compoents', resolve('./src/components'))
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                // 只打包最初依赖的第三方
                chunks: 'initial'
              },
              elementUI: {
                // 将elementUI拆分为单个包
                name: 'chunk-elementUI',
                // 重量需要大于libs和app，否则会被打包到libs或app中
                priority: 20,
                // in order to adapt to cnpm
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/
              },
              commons: {
                name: 'chunk-commons',
                test: path.resolve(__dirname, 'src/components'),
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
        })
    // //先去除原有svg-loader对这个文件夹的影响，不然你在css或者less中无法正常使用svg文件
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    // 再添加svg-sprite-loader处理该文件夹
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
