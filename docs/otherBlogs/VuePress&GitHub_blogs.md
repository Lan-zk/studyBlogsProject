# VuePress + GitHub 个人博客搭建教程

## 1. yarn工具

1. yarn安装 (已经安装node.js的情况下，使用npm安装)

   ```she
   npm install -g yarn
   ```

2. 查看yarn版本

   ```she
   yarn -v
   ```

## 2. 本地搭建VuePress

[参考教程1：冴羽](https://github.com/mqyqingfeng/Blog/issues/235)

[参考教程2：codinglin](https://juejin.cn/post/7136883164357591047)

[官方文档](https://vuepress.vuejs.org/zh/guide/getting-started.html)

1. 创建一个文件夹并进入（文件名随意）

   * 我自己建了一个blogs文件夹

   ```tex
   D:\self\blogs
   ```

   * 官方文档示例：

     ```shell
     mkdir vuepress-starter && cd vuepress-starter
     ```

2. 使用yarn或者npm进行初始化

   ```shell
   yarn init # npm init
   ```

   ![image-20230330202759779](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330202759779.png)

 3. 将 VuePress 安装为本地依赖

    ```shell
    yarn add -D vuepress # npm install -D vuepress
    ```

    ![image-20230330203051691](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330203051691.png)

4. 创建docs文件夹并在里面新建README.md文件

   * VuePress 会以 docs 为文档根目录

   * README.md 相当于主页

   * 官方示例：

     ```shell
     mkdir docs && echo '# Hello VuePress' > docs/README.md
     ```

   * 效果：

     ![image-20230330203405396](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330203405396.png)

5. 在package.json 中添加 scripts

   ```json
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

   * 效果：

     ![image-20230330224313097](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330224313097.png)

6. 在本地启动服务器

   ```shell
   yarn docs:dev # npm run docs:dev
   ```

   * VuePress 会在 http://localhost:8080 (opens new window) 启动一个热重载的开发服务器。

     ![image-20230330204026775](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330204026775.png)

     ![image-20230330211213949](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330211213949.png)

## 3. 基本配置

1. 在文档目录下创建一个`.vuepress` 目录，所有VuePress相关的文件都会被放在这里。

   * 项目结构

     ```markdown
     .
     ├─ docs
     │  ├─ README.md
     │  └─ .vuepress
     │     └─ config.js
     └─ package.json
     ```

2. 在`.vuepress` 文件夹下添加`config.js` ，配置网站的标题和描述

   ```js
   module.exports = {
     title: 'Hello VuePress',
     description: 'Just playing around'
   }
   ```

## 4. 导航栏配置

​	更多配置参考 [VuePress 导航栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#导航栏)

1. 修改`config.js` 在页首右上角添加导航栏

   ```js
   module.exports = {
       title: 'lzk-blogs', // 网站标题
       description: '学习空间', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
       themeConfig: { // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
           nav: [
               { text: '首页', link: '/' },
               { 
                   text: '林 的个人博客', 
                   items: [
                       { text: 'Github', link: 'https://github.com/Lan-zk' },
                       { text: '掘金', link: 'https://juejin.cn/user/998826270262600/posts' },
                       { text: 'bilibili', link: 'https://space.bilibili.com/94281901/video' }
                   ]
               }
           ]
       }
   }
   ```

   * 效果：

     ![image-20230330214457837](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330214457837.png)

## 5. 侧边栏配置

​	更多配置参考 [VuePress 侧边栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)

1. 添加一些文件夹和`md` 文档，大致目录结构如下

   ```markdown
   .
   ├─ docs
   │  ├─ README.md
   │  └─ .vuepress
   │     └─ config.js
   |  └─ otherBlogs
   |  	  └─ VuePress&GitHub_blogs.md
   └─ package.json
   ```

2. 然后在 `config.js` 中配置侧边栏

   ```js
   module.exports = {
       themeConfig: { // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
           nav: [...],
           sidebar: [
               {
                   title: '首页',
                   path: '/',
               },
               {
                   title: '其它博客',
                   path: '/otherBlogs/VuePress&GitHub_blogs',
                   collapsable: true, // 是否折叠
                   children: [
                       { title: '个人博客搭建教学', path: '/otherBlogs/VuePress&GitHub_blogs'}
                   ],
               }
           ], 
       }
   }
   ```

   * 效果：

     ![image-20230330221939912](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330221939912.png)

## 6. 更换主题

* 现在基本的目录和导航功能已经实现，但如果我还想要加载 loading、切换动画、模式切换（暗黑模式）、返回顶部、评论等功能呢，为了简化开发成本，我们可以直接使用主题，这里使用的主题是 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)：

1. 安装 vuepress-theme-reco

   ```shell
   yarn add vuepress-theme-reco # npm install vuepress-theme-reco --save-dev
   ```

2. 然后在 `config.js` 里引用该主题:

   ```js
   module.exports = {
     // ...
     theme: 'reco'
     // ...
   }  
   ```

## 7. 部署到GitHub

1. 新建一个GitHub仓库

   ![image-20230330224946759](https://raw.githubusercontent.com/Lan-zk/lzkImageHost/master/img/image-20230330224946759.png)

2. 修改`config.js` 添加`base` 路径

   ```js
   module.exports = {
       ...
       base: '/studyBlogs/', // 修改为自己的仓库名
       ...
   }
   ```

3. 创建脚本文件 修改对应的`用户名` 和`仓库名` 

   ```shell
   #!/usr/bin/env sh
   
   # 确保脚本抛出遇到的错误
   set -e
   
   # 生成静态文件
   npm run docs:build
   
   # 进入生成的文件夹
   cd docs/.vuepress/dist
   
   git init
   git add -A
   git commit -m 'deploy'
   
   # 如果发布到 https://<USERNAME>.github.io/<REPO>
   git push -f git@github.com:XXX/XXX.git master:gh-pages
   
   cd -
   ```

   