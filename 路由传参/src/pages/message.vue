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
    }
}
</script>
<style lang="">
    
</style>