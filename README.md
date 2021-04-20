### description
该插件主要用来删除production环境代码中的console

### usage
1. npm install --save-dev @clintech/babel-plugin-remove-console
2. 修改Babel配置文件babel.config.js
``` json
{
  plugins: [
    ['@clintech/remove-console', { env: process.env.NODE_ENV }],
  ],
}
```
3. 当process.env.NODE_ENV为生产环境时会移除代码中的console

### demo
如下代码通过插件转换后

``` js
const num = 0;

console.log(num);

function add(a, b) {
  console.log(a + b);
  return a + b;
}
```

输出：
``` js

const num = 0;

function add(a, b) {
  return a + b;
}
```