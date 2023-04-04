// 侧边栏配置
module.exports = [
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
            { title: '个人博客搭建教学', path: '/otherBlogs/VuePress&GitHub_blogs' }
        ],
    }
]