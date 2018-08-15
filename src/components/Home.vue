<template>
  <main>
    <div>
      <NormalInfo
        v-bind:windSpeed="now.wind_speed"
        v-bind:air="this.mock.b"
        v-bind:humidity="now.humidity"
        v-bind:value="now.temperature"
      ></NormalInfo>
      <LocationInfo
        :location="location.path"
        :description="now.text"
      ></LocationInfo>
      <IconInfo
        :description="now.text"
        :icon="this.mock.icon"
      ></IconInfo>

      <GridData
        :visibility="now.visibility"
        :feels_like="now.feels_like"
        :pressure="now.pressure"
      ></GridData>
      <LifeData
        :life-data="this.lifeData"
      ></LifeData>
    </div>
  </main>
</template>

<script>
  import NormalInfo from './NormalInfo'
  import LocationInfo from './LocationInfo'
  import IconInfo from './IconInfo'
  import SunDial from './SunDial'
  import LifeData from './LifeData'
  import GridData from './GirdData'
    export default {
      components: {NormalInfo,LocationInfo,IconInfo,SunDial,LifeData,GridData},
      name: "Home",
      data(){
        return{
          mock:{
            d:"小雨",
            loaction:"沈阳市 浑南区",
            icon:"../assets/icons/weather/snow.svg"
          },
          lifeData:{},
          location:{},
          now:{},
          last_update:{}
        }
      },
      methods:{
        getLifeData() {
          var _this = this;
          var url = '/apis/getbriefsuggestionlife?location=hhht';
          this.$http.get(url).then(function (res) {
            _this.lifeData = res.data.info;
            console.log(_this.lifeData);
          })
        },
        getNowWeather() {
          var _this = this;
          var url = '/apis/getNowWeather?location=hhht';
          this.$http.get(url).then(function (res) {
            _this.location=res.data.info.results[0].location
            _this.now=res.data.info.results[0].now
            _this.last_update = res.data.info.results[0].last_update
          })
        }
      },
      created() {
        this.getLifeData();
        this.getNowWeather();
      }
    }
</script>

<style scoped>
  main {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: url("../assets/images/morning.jpg");
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
