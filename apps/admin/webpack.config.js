/*
 * @Date: 2022-10-15 17:41:37
 * @LastEditTime: 2022-10-15 18:32:44
 */
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { getThemeVariables } = require('antd/dist/theme');

function overrideLessVariables(config, variables) {
  config.module.rules
    .find((r) => r.test.toString().includes('.less$'))
    .oneOf.find((x) => x.test.toString() === '/\\.less$/')
    .use.find((l) =>
      l.loader.includes('less-loader')
    ).options.lessOptions.modifyVars = variables;
}

module.exports = (c) => {
  overrideLessVariables(c, {
    ...getThemeVariables({
      dark: true,
    }),
    // 主色调
    "primary-color": "#58A76D",
    // 全局边框大小
    "border-radius-base": "10px",
    //  文字颜色
    "primary-6": "#6D7278"
  });

  return nrwlConfig(c);
};
