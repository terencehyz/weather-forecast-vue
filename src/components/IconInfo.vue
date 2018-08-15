<template>
    <section>
      <!--<img class="weather__icon" :src="icon" :alt="description">-->
      <img src="../assets/icons/weather/thunderstorm.svg" :alt="description" class="weather__icon">
    </section>
</template>

<script>
    export default {
      name: "IconInfo",
      props:{
        description:{
          required:true,
          type:String
        },
          icon:{
            required: false,
            type: String
          }
      }
    }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .weather__icon {
    width: 12em;
    padding-bottom: 9em;
  }
</style>
