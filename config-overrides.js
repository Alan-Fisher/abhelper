/* eslint-disable */
const path = require('path')

const {
  override, fixBabelImports, addLessLoader, babelInclude,
} = require('customize-cra')

module.exports = function (config, env) {
  return Object.assign(config, override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          '@border-radius-base': '6px',
          '@link-hover-decoration': 'underline',
          '@primary-color': '#6CC04A',
        },
      },
    }),
  )(config, env))
}
