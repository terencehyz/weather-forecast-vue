<template>
    <section>
      <div class="location">{{ location }}</div>
      <div class="weather__description">{{ description }}</div>
    </section>
</template>

<script>
    export default {
      name: "LocationInfo",
      props:{
        location:{
          required: true
        },
        description: {
          required: true
        },
      }
    }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: rgba(255, 255, 255, 0.9);
  }

  .location {
    text-transform: uppercase;
    font-weight: bold;
  }

  .weather__description {
    text-transform: lowercase;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }

  .weather__description:first-letter {
    text-transform: uppercase;
  }
</style>
