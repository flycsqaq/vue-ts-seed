module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: {
      '/douban': {
        target: 'https://api.douban.com/v2/movie',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/douban': '',
        },
      },
    },
    before: () => {},
  },
};
