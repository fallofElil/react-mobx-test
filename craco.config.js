/* eslint-disable */
const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');
const antdTheme = require('./src/styles/antd-theme');
/* eslint-enable */

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          ...antdTheme,
        },
        //customizeThemeLessPath: path.join(__dirname, 'src/less/themes/theme-main.less'),
      },
    },
  ],
};
