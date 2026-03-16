<template>
   
<div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="pushit">前进</button>
    <button @click="backit">后退</button>
</div>
    
</template>
<script>
export default {
    name:'BannerIt',
    methods:{
        pushit(){
            //  this.$router.forward()来自路由器自带的库，用于前进
          this.$router.forward()
        },
         //  this.$router.back()来自路由器自带的库，用于后退
         backit(){
          this.$router.back()
        },
    }
}
</script>
<style lang="">
    
</style>