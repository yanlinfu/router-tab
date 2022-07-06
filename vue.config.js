/*
 * @Author: fyl
 * @LastEditors: fyl
 * @Date: 2022-07-05 17:35:12
 * @LastEditTime: 2022-07-06 11:36:38
 * @Description:
 */
// 构建目标是否为库
const isBuildLib =
  (process.env.npm_lifecycle_script || '').indexOf('--target lib') > 0

module.exports = {
  publicPath: '', // 相对路径

  outputDir: isBuildLib ? 'dist/lib' : 'dist/docs/demo',

  // webpack 链式配置
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },

  css: {
    loaderOptions: {
      sass: {
        // scss公共变量
        prependData: isBuildLib
          ? undefined
          : `@use "src/assets/scss/variables.scss" as *;`
      }
    }
  }
}
