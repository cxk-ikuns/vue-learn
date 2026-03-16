<template>
    <ul>
        <!-- 从父组件的路由接收数据，用$route.query.内容名 -->
        <li>消息id：{{id}}</li>
        <li>消息thing：{{thing}}</li>
    </ul>
</template>
<script>
export default {
    name:'DeTail',
    //用于接收来自message路由传过来的参数
    props:['id','thing']
}
</script>
<style lang="">
    
</style>