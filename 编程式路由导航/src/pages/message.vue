<template>
 <div>
    <ul>
        <li v-for="p in messagelist" :key='p.id'>
        <!-- to对象式传送参数：:to=“{path：‘（写要进入到哪里）’，query：{写要传过去的参数}}” -->
        <router-link 
         :to="{
            path:'/Home/message/detail',
            query:{
                id:p.id,
                thing:p.thing
            }
         }">
        {{p.thing}}
        </router-link>&nbsp;&nbsp;
        <button @click="pushlook(p)">push查看</button>
        <button @click="replacelook(p)">replace查看</button>
        </li>
    </ul>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'MessageIt',
    data(){
        return{
            messagelist:[
                {id:'001',thing:'踢球'},
                {id:'002',thing:'吃饭'},
                {id:'003',thing:'喝水'}
            ]
        }
    },
    methods:{
        pushlook(p){
            //路由器router里自带的push，里面实现类似router-link标签的效果，需写一个配置项，path和query，写法和router-link一样
          this.$router.push({
           path:'/Home/message/detail',
            query:{
                id:p.id,
                thing:p.thing
            }
          })
        },
        replacelook(p){
            // //路由器router里自带的replace，里面实现类似router-link标签的效果，需写一个配置项，path和query，写法和router-link一样
           this.$router.replace({
           path:'/Home/message/detail',
            query:{
                id:p.id,
                thing:p.thing
            }
          })
        }
    }
}
</script>
<style lang="">
    
</style>