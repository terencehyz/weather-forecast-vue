<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="icon-container">
      <mu-icon value="home"></mu-icon>
      <mu-icon value="flight_takeoff" color="red"></mu-icon>
      <mu-icon value="cloud_download" color="orange"></mu-icon>
      <mu-icon value="info" color="blue"></mu-icon>
    </div>
    <div>
      <mu-button class="demo-color-btn" color="primary"> primary </mu-button>
      <mu-button class="demo-color-btn" color="success"> success </mu-button>
      <mu-button class="demo-color-btn" color="indigo400"> indigo400 </mu-button>
      <mu-button class="demo-color-btn" color="#1565c0"> Custom </mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-color-btn {
  margin: 8px;
}
</style>
