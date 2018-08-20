<template>
  <div>
    <section class="sectionA">
      <div class="air-quality" @click="navToAirCondition()">
        <img src="../assets/icons/quality.svg" alt="air quality"><span class="air__value normalText">{{ air }}</span>
      </div>
      <div class="wind-speed" @click="navToWindCondition()">
        <img src="../assets/icons/wind.svg" alt="wind speed"><span
        class="wind__value normalText">{{ windSpeed }}m/s</span>
      </div>
      <div class="humidity">
        <img src="../assets/icons/humidity.svg" alt="humidity"><span class="humidity__value normalText">{{ humidity }}&percnt;</span>
      </div>
    </section>
    <section class="sectionB">
      <div class="temperature__value">{{ (scaleSymbol === 'C')? value : fValue }}</div>
      <div class="temperature__right">
        <div class="temperature__scale">
          <a href="#" @click.prevent="toggleTemperature">&deg;{{ scaleSymbol }}</a>
        </div>
      </div>
    </section>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "NormalInfo",

    data: function () {
      return {
        scale: 'Celcius'
      }
    },

    computed: {
      scaleSymbol() {
        return this.scale.charAt(0);
      },

      fValue() {
        return this.toFahrenheit(this.value);
      }
    },

    methods: {
      toFahrenheit(value) {
        return Math.floor((value * 1.8) + 32);
      },

      toggleTemperature() {
        (this.scale === 'Celcius') ? this.scale = 'Fahrenheit' : this.scale = 'Celcius';
      },

      navToAirCondition() {
        this.$router.push({
          path: '/AirCondition',
          name: 'AirCondition',
          params: {
            lon:this.lon,
            lat:this.lat,
            city:this.city,
            checkType:this.checkType
          }
        })
      },

      navToWindCondition() {
        this.$router.push({
          path: '/WindCondition',
          name: 'WindCondition',
          params: {
            wind_direction: this.wind_direction,
            wind_direction_degree: this.wind_direction_degree,
            wind_speed:this.windSpeed,
            wind_scale:this.wind_scale
          }
        })
      }
    },

    props: {
      value: {
        required: true
      },
      air: {
        required: true
      },
      windSpeed: {
        required: true
      },
      humidity: {
        required: true
      },
      wind_direction: {
        required: true
      },
      wind_direction_degree: {
        required: true
      },
      wind_scale: {
        required: true
      },
      city:{
        required: false
      },
      lon:{
        required: false
      },
      lat:{
        required: false
      },
      checkType:{
        required: false
      }
    }
  }
</script>

<style scoped>
  .normalText {
    font-size: 18px;
    line-height: 48px;
  }

  .sectionB {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: rgba(255, 255, 255, 0.9);
  }

  .sectionA {
    width: 100%;
    padding-top: 25px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    color: rgba(255, 255, 255, 0.9);
  }

  .air-quality img {
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }

  .wind-speed img {
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }

  .humidity img {
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }

  .temperature__value {
    font-size: 7em;
    color: rgba(255, 255, 255, 0.75);
  }

  .temperature__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .temperature__scale {
    padding-top: 5px;
    font-size: 5em;
    color: rgba(255, 255, 255, 0.75);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color .2s ease-in;
  }


</style>
