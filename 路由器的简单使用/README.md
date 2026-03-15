1采用监视，就可以不需要采取添加写一套逻辑，删除写一点套逻辑，使用监视数组，实时传送最新数组，即可实现删除后，数组是最新的
data(){
      return {
        things:JSON.parse(localStorage.getItem('things')) || []
      }
}
watch:{
      things:{
        deep:true,
        handler(new_things){
          localStorage.setItem('things',JSON.stringify(new_things))
        }
      }
    }
