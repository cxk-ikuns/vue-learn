<template>
<div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner></Banner>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <!--/使用router的标签：router-link，不能使用a标签，router-link会自动转为a标签 -->
          <!-- to的作用为指定路径 -->
          <!-- active-class属性能够根据点的位置，为他加上css属性 -->
          <router-link class="list-group-item " to="/about" active-class="active">About</router-link>
          <router-link class="list-group-item " to="/home" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- router-view标签类似插槽的作用 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner.vue'
export default {
  name:'App',
  data(){
  },
  components:{
    Banner
  }
}
</script>
<style >
  
</style>