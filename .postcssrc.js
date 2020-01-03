// https://github.com/michael-ciniawsky/postcss-load-config
/*
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
*/
module.exports = {
  plugins: {
    //...
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, //vant-UI的官方根字体大小是37.5
      propList: ['*']
    }
  }
}