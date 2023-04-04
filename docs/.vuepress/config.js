const pluginConfig = require('./configs/pluginConfig.js');
const navConfig = require('./configs/navConfig.js');
const sidebarConfig = require('./configs/sidebarConfig.js');

module.exports = {
    base: '/studyBlogs/',
    title: 'lzk-blogs', // 网站标题
    description: '学习空间', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    theme: 'reco',
    locales: { // 提供多语言支持的语言配置
        '/': {
            lang: 'zh-CN'
        }
    },
    head：[
        // 页签
        // ['link', { rel: 'icon', href: `/logo.png` }]
    ]，
    markdown: {
        lineNumbers: true, // 代码显示行号
    },
    themeConfig: { // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
        // logo: '/img/favicon.ico', // 导航栏左侧的logo
        repo: 'https://github.com/Lan-zk/studyBlogsProject',  // 链接的地址
        repoLabel: 'GitHub',  // 链接的名称
        nav: navConfig,
        sidebar: sidebarConfig,
        subSidebar: 'auto', // 在右边生成子侧边栏，用于展示当前文档的子级结构
        lastUpdated: '上次更新', // 在文章右下角展示文档更新时间，基于git commit 的时间
    },
    plugins: pluginConfig,
}