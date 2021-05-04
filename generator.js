module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      "core-js": "^3.6.5",
      "vue": "^2.6.11",
      "vue-router": "^3.2.0",
      "vuex": "^3.4.0"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.5.0",
      "@vue/cli-plugin-eslint": "^4.5.12",
      "@vue/cli-plugin-router": "~4.5.0",
      "@vue/cli-plugin-vuex": "~4.5.0",
      "@vue/cli-service": "~4.5.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "@vue/eslint-config-standard": "^5.1.2",
      "babel-eslint": "^10.1.0",
      "eslint": "^6.7.2",
      "eslint-plugin-import": "^2.20.2",
      "eslint-plugin-node": "^11.1.0",
      "eslint-plugin-prettier": "^3.3.1",
      "eslint-plugin-promise": "^4.2.1",
      "eslint-plugin-standard": "^4.0.0",
      "eslint-plugin-vue": "^6.2.2",
      "lint-staged": "^9.5.0",
      "prettier": "^2.2.1",
      "sass": "^1.26.5",
      "sass-loader": "^8.0.2",
      "vue-template-compiler": "^2.6.11"
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
