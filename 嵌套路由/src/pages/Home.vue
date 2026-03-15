<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
        <ul class="nav nav-tabs">
            <li>
            <!-- 在to那里路径要加上/父路由路径/子路由路径 -->
            <router-link class="list-group-item"  active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
            <router-link class="list-group-item "  active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
       <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeIt'
}
</script>
<style lang="">
    
</style>