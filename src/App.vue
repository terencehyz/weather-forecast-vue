<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './common/font/font.css';
  #app{
    font-family: SourceHanSansCN;
  }
  main {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: url("./assets/images/morning.jpg");
    background-color: rgb(171,231,241);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  /*@media screen and (min-width: 450px) {*/
    /*main {*/
      /*width: 380px;*/
    /*}*/
  /*}*/
</style>
