// 插件配置
module.exports = [ // 插件引入
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
]