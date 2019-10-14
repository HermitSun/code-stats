# 用于SEEC的统计数据展示页

~~其实没什么可说的，Swiper NB！
前人栽树后人乘凉啊哈哈……~~

> 2019.10.14 更新

## 项目启动

### 环境和依赖

首先需要node.js环境，node版本需要 > 8.9，最好 > 8.11。

其实用官网推荐的LTS就行（目前好像是10.16.3？）。然后运行：

``` shell
npm install
# 如果安装了yarn
yarn
# or
yarn install
```

### 启动开发服务器（开发环境）
``` shell
npm run serve
# or
yarn run serve
```

然后开发服务器会在`localhost: 8085`启动。

### 打包并部署（生产环境）
``` shell
npm run build
# or
yarn run build
```

打包后的静态资源在`~/code-stats/`里。注意，由于使用了前端路由，对部署的路径有要求，需要部署在`/code-stats`这个URL上，比如http://foo.bar/code-stats。配置可以修改。

### 使用的技术

#### 框架

- Vue 2（2.6.10）
- Vuex
- Vue-router

#### 通信

- axios

#### UI

- Swiper（滑动效果）
- Sass（CSS预处理器）

#### 语言

- JavaScript + babel
- ESLint（代码风格检查）

### 配置调整

配置文件主要是`/vue.config.js`。主要可以调整的项目有：

```js
// 生产环境部署的路径（也就是部署的URL）
const BASE_URL = process.env.NODE_ENV === 'production' ? '/code-stats/' : '/'
// 生成的静态资源的路径
outputDir: 'code-stats'
// 开发服务器占用的端口
devServer: {
    port: 8085
}
```

