module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      "vue-i18n": "^8.24.4",
    },
    devDependencies: {
      "@vue/eslint-config-prettier": "^6.0.0",
      "eslint-plugin-prettier": "^3.3.1",
      "prettier": "^2.2.1",
    },
    gitHooks: {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.{js,jsx,vue}": [
        "vue-cli-service lint",
        "git add"
      ]
    }
  });
  // 复制template模版
  api.render('./template');
}
