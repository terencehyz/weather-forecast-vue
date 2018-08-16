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
  #app{
    font-family: SourceHanSansCN-Normal;
  }
  main {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: url("./assets/images/morning.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 450px) {
    main {
      width: 380px;
    }
  }
</style>
