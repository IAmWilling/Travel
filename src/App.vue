<template>
  <div id="app">
    <transition name="slide-fade">
       <keep-alive>
     <router-view/>
     </keep-alive>  
    </transition>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin:0px;
}
#app {
  margin:0;

}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(500px);
  opacity: 0;
}
</style>
