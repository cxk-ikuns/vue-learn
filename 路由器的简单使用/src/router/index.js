//该文件用于路由器的配置
//引入路由器库
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
//创建并暴露路由器
export default new VueRouter({
    //routes里面放一个个路由
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]

})