const  path = require('path')
const CracoLessPlugin = require('craco-less');
// 可以将它封装成一个函数，直接调用即可
const resolve = pathname => path.resolve(__dirname,pathname)

// 这种东西都是通过node来加载的，使用CommonJs导入
module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { },
            javascriptEnabled: true,
          },
        },
      }
    }
  ],
  // webpack
  webpack: {
    alias:{
      "@":resolve("src"),
      "components":resolve("src/components"),
      "utils":resolve("src/utils"),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
};

