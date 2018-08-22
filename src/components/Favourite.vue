<template>
  <div>
    <Weather
      v-if="city"
      :lat="lat"
      :lon="lon"
      :city="city"
      :checkType="checkType"
    ></Weather>
  </div>
</template>

<script>
  import Weather from './Weather'

  export default {
      name: "Favourite",
      components:{Weather},
      data(){
        return{
          checkType : "city",
          lat :null,
          lon:null,
          city:null
        }
      },
    created(){
      this.city=localStorage.getItem("choosen");
      }
  }
</script>

<style scoped>

</style>
