const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pluginOptions: {
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'your-s3-bucket-name',
      region: 'us-east-1',
      pwa: true,
      pwaFiles: 'service-worker.js',
      enableCloudfront: true,
      cloudfrontId: 'AB123456XYZ',
      cloudfrontMatchers: '/*',
      uploadConcurrency: 5,
    },
  },

  configureWebpack: {
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
    resolve: {
      alias: {
        Common: resolve('src/components/common'),
        Pages: resolve('src/components/pages'),
        Components: resolve('src/components'),
        Lib: resolve('src/lib'),
        Models: resolve('src/models'),
        Router: resolve('src/router'),
        StoreModules: resolve('src/store/modules'),
        Gql: resolve('src/graphql'),
        Mixins: resolve('src/mixins'),
      },
    },
  },

  pwa: {
    name: 'Example',
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  lintOnSave: true,
};
