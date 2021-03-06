/*
 * @Description: eslint配置
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-15 18:23:23
 * @LastEditors: Duchin/梁达钦
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures:{
      // 支持装饰器
      legacyDecorators: true
    }
  },
  rules: {
    // 接口分号
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 是否能使用debugger,开发可以，线上不可以
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // switch必须提供 default
    'default-case': 'error',
    // 禁止扩展原生属性
    'no-extend-native': 'error',
    // 禁止一成不变的循环,防止代码出现死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    // js中应使用单引号替代双引号
    quotes: ['error', 'single'],
    // 要求大括号内必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 数组前后不需要添加空格
    'array-bracket-spacing': ['error', 'never'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 代码中可出现console
    'no-console': 'off',
    // 正则中可以出现控制字符
    'no-control-regex': 'off',
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
      // 可以声明未使用的h，方便jsx
      argsIgnorePattern: 'h'
    }],
    // 行注释必须在行上面
    "line-comment-position":['error',{"position": "above" }],
    // 一个函数最多能指定4个参数
    "max-params":['error',{max:4}],
    // 构造函数必须首字母大写
    // "new-cap":['error', {"newIsCap": true} ],
  }
}
