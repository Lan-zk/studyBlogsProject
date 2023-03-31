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
    themeConfig: { // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
        nav: [
            // 导航栏配置
            { text: '首页', link: '/' },
            { 
                text: '林 的个人博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/Lan-zk' },
                    { text: '掘金', link: 'https://juejin.cn/user/998826270262600/posts' },
                    { text: 'bilibili', link: 'https://space.bilibili.com/94281901/video' }
                ]
            }
        ],
        sidebar: [
            // 侧边栏配置
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
        subSidebar: 'auto', // 在右边生成子侧边栏，用于展示当前文档的子级结构
    }
}