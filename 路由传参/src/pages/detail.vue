<template>
    <ul>
        <!-- 从父组件的路由接收数据，用$route.query.内容名 -->
        <li>消息id：{{$route.query.id}}</li>
        <li>消息thing：{{$route.query.thing}}</li>
    </ul>
</template>
<script>
export default {
    name:'DeTail'
}
</script>
<style lang="">
    
</style>