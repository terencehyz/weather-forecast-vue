<template>
  <div>
    {{info.bookname}}+{{info.introduction}}+{{info.bid}}
    <hr>
    <br>
  </div>
</template>

<script>
  export default {
    name: "CityComponent",
    props:['info'],
      data() {
        return{
        }
      }
  }
</script>

<style scoped>

</style>
