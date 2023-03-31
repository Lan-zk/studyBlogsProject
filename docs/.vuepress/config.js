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
        lastUpdated: '上次更新', // 在文章右下角展示文档更新时间，基于git commit 的时间
    },
    plugins: [ // 插件引入
        // 公告栏
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
          width: '300px', // 默认 260px
          title: '消息提示',
          body: [
            {
              type: 'title',
              content: '消息弹窗',
              style: 'text-aligin: center;'
            },
          ],
          footer: [
            {
              type: 'button',
              text: '确认',
              link: '/'
            } 
          ]
        }],
        // 代码复制
        ["vuepress-plugin-code-copy", {
            // selector: String, // 复制按钮的css选择器
            align: 'top', // 垂直位置
            color: '#7a7a7c', // 按钮颜色
            backgroundTransition: true, // 点击按钮是否更换代码块背景色
            backgroundColor: '#0075b8', // 整个代码块的背景色
            successText: '已复制', // 按下复制按钮之后显示的文本
            staticIcon: true, // 一直显示复制按钮
         }],
         // 看板娘
         [
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',
            {
                theme: [
                    'blackCat', 'whiteCat', 'haru1',
                    'haru2', 'haruto', 'koharu',
                    'izumi', 'shizuku', 'wanko',
                    'miku', 'z16'
                    ],
                clean: false, // 是否隐藏所有按钮
                messages: {
                    // 按钮提示语
                    welcome: '欢迎来到 林的博客',
                    home: '首页',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '你知道我喜欢吃什么吗？痴痴地望着你。'
                },
                messagesStyle: {
                    // 自定义消息框样式
                    right: '68px',
                    bottom: '190px'
                },
                modelStyle: {
                    // 自定义模型样式
                    right: '90px',
                    bottom: '-20px',
                    opacity: '0.9'
                },
                btnStyle: {
                    // 自定义按钮样式
                    right: '90px',
                    bottom: '40px'
                },
                width: 150, // 模型宽度
                height: 220, // 模型高度
            }
          ]
    ],
}