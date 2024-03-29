
const withCSS = require('@zeit/next-css');
const Dotenv = require('dotenv-webpack');

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})



module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
}



module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('./src/polyfills.js');
      }
      return entries;
    };

      // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
      // silent는 옵션은 .env파일을 찾지 못했을 때 에러를 일으키지 않도록 설정해주는 옵션이다.
      config.plugins.push(new Dotenv({ silent: true }));
    return config
  }
}



    
