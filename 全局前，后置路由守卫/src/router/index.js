//该文件用于路由器的配置
//引入路由器库
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
// 引入子路由
import message from '../pages/message.vue'
import news from '../pages/news.vue'
//引入路由传参的组件
import detail from '../pages/detail'
//创建路由器
const router=new VueRouter({
    //routes里面放一个个路由
    routes:[
        {
            name:'about',
            path:'/about',
            component:About,
        },
        {
            name:'home',
            path:'/home',
            component:Home,
             //子路由写children数组里
            children:[
                {
                     name:'message',
                    ////子路由路径不加/
                    path:'message',
                    component:message,
                    children:[
                        { 
                             name:'detail',
                            path:'detail',
                            component:detail,
                            //传给detail组件
                                props($route)
                                {
                                    return {id:$route.query.id,thing:$route.query.thing}
                                }
                        },
                    ],
                    //meta由于存放程序员自定义的属性，比如这里为了让一些路由需要加上校验，所以加上了istruth:true
                    meta:{istruth:true}
                },
                {
                    name:'news',
                    path:'news',
                    component:news,
                    //meta由于存放程序员自定义的属性，比如这里为了让一些路由需要加上校验，所以加上了istruth:true
                    meta:{istruth:true}
                }
            ]
        }
    ]

})
//设置全局前置（切换前检查）路由守卫router.beforeEach
//
// to表示去哪里,from表示来自哪里,next表示允许进入
router.beforeEach((to,from,next)=>{
  if(to.meta.istruth)
  {
     if(localStorage.getItem('username')==='林炫有')
     {
        next()
     }
     else
     {
        alert('使用人不是林炫有')
     }
  }
  else
  {
    next()
  }
})
// 设置全局后置（切换前检查）路由守卫router.afterEach、
//切换后调用
router.afterEach((to,from)=>{

})
// 暴露路由
export default router