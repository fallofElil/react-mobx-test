/* eslint-disable */
const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');
/* eslint-enable */

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/styles/theme-customize.less'),
      },
    },
  ],
};
