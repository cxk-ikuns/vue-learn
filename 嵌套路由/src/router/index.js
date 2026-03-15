//该文件用于路由器的配置
//引入路由器库
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
// 引入子路由
import message from '../pages/message.vue'
import news from '../pages/news.vue'
//创建并暴露路由器
export default new VueRouter({
    //routes里面放一个个路由
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
             //子路由写children数组里
            children:[
                {
                    ////子路由路径不加/
                    path:'message',
                    component:message
                },
                {
                    path:'news',
                    component:news
                }
            ]
        }
    ]

})