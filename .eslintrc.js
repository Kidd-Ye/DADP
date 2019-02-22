// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "space-before-blocks": ["off"], 
    "comma-dangle": ["off"],
    "semi": ["off"],
    "indent": ["off"],
    "vue/valid-v-if": "error",
    "linebreak-style": ["off"],
    "quotes": ["off"],                          // 限制使用单引号或者双引号
    "import/extensions": ["off"],
    "no-restricted-properties": ["warn"],
    "eqeqeq": ["warn"],                         // 强制使用 === 代替 ==
    "import/newline-after-import": ["off"],
    "import/first": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "space-before-function-paren": ["off"],
    "arrow-parens": ["off"],
    "object-curly-spacing": ["warn"],
    "no-multi-spaces": ["off"],
    "no-multiple-empty-lines": ["off"],
    "prefer-destructuring": ["off"],
    "no-debugger": ["off"],
    "no-lonely-if": ["off"],
    "no-restricted-syntax": ["off"],
    "no-shadow": ["off"],
    "arrow-body-style": ["off"],                // 要求箭头函数体使用大括号
    "no-else-return": ["off"],                  // 禁止 if 语句中 return 语句之后有 else 块
    "radix": ["off"],                           // 强制在 parseInt() 使用基数参数
    'default-case': ['off'],                    // 要求 switch 语句中有 default 分支
    // 'no-var': ['warn'],                         // 要求使用let或const
    'no-continue': ['off'],                     // 禁止使用continue语句
    'dot-notation': ['off'],                    // 强制尽可能地使用点号
    'object-property-newline': ['off'],         // 强制将对象的属性放在不同的行上
    'import/no-unresolved': ['off'],
    'eol-last': ['off'],                        // 要求文件最后以空行结束
    'object-curly-newline': ["off"],            // 对象字面量声明花括号是否需要换行
    'no-unused-vars': ["off"],
  }
}
