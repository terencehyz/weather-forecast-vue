<template>
    <section>
      <div class="location">
        <span class="location__text">
          {{ location }}
        </span>
      </div>
      <div class="weather__description">
        <span class="location__text">
          {{ description }}
        </span>
      </div>
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

  .location__text{
    font-weight: bold;
    font-size: 1.35rem;
  }
</style>
