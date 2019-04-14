module.exports = {
  devServer: {
    port: 7779,
    proxy: 'http://localhost:3000'
  },
  pluginOptions: {
    ssr: {
      port: 7779,
      proxy: 'http://localhost:3000'
    }
  }
}
