//侧边栏
module.exports = {
    '/blogs/': [
        {
            title: '分类一',
            collapsable: false,
            children: [
                './category1/2018/121501',
                './category1/2019/092101',
            ]
        },
        {
            title: '分类二',
            collapsable: false,
            children: [
                './category2/2016/121501',
                './category2/2017/092101',
            ]
        },
        {
            title: '组件',
            // collapsable: false,
            children: [
                './components/element-ui',
                './components/view-ui',
            ]
        },
    ],

}
