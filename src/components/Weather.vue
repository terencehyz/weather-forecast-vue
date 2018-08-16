<template>
    <div>
        <NormalInfo
          v-bind:windSpeed="now.wind_speed"
          v-bind:air="now.quality"
          v-bind:humidity="now.humidity"
          v-bind:value="now.temperature"
        ></NormalInfo>
        <LocationInfo
          :location="location.name+','+location.country"
          :description="now.text"
        ></LocationInfo>
        <IconInfo
          :icon="now.code"
          :description="now.text"
        ></IconInfo>
        <HourWeather
          :week="now.week"
          :high="high"
          :low="low"
        ></HourWeather>
        <WeekWeather
          :week-data="weekData"
        ></WeekWeather>
        <GridData
          :visibility="now.visibility"
          :feels_like="now.feels_like"
          :pressure="now.pressure"
        ></GridData>
        <LifeData
          :life-data="this.lifeData"
        ></LifeData>
    </div>
</template>

<script>
  import NormalInfo from './NormalInfo'
  import LocationInfo from './LocationInfo'
  import IconInfo from './IconInfo'
  import SunDial from './SunDial'
  import LifeData from './LifeData'
  import GridData from './GirdData'
  import WeekWeather from './WeekWeather'
  import HourWeather from './HourWeather'
  import YoScroll from './YoScroll'
    export default {
      components: {NormalInfo,LocationInfo,IconInfo,SunDial,LifeData,GridData,WeekWeather,HourWeather,YoScroll},
      props:{
        lat:{
          required:true
        },
        lon:{
          required:true
        },
        city:{
          required:false
        },
        checkType:{
          required:true
        },
      },
      name: "Home",
      data(){
        return{
          mock:{
            b:"良",
            d:"小雨",
            loaction:"沈阳市 浑南区",
          },
          lifeData:{},
          location:{},
          now:{},
          last_update:{},
          weekData:[],
          high:0,
          low:0
        }
      },
      methods:{
        getPoem(){
          var url = '/apis/getpoem?poemtitle='+this.now.text;
          this.$http.get(url).then(function (res) {
            this.poem = res.data.info;
          })
        },
        getLifeData() {
          var url = '/apis/getbriefsuggestionlife?location=';
          var _this = this;
          if (_this.checkType=="data"){
            url = url + _this.lat+':'+_this.lon;
          }
          else {
            url = url+_this.city;
          }
          this.$http.get(url).then(function (res) {
            _this.lifeData = res.data.info;
          })
        },
        getNowWeather() {
          var _this = this;
          var url = '/apis/getNowWeather?location=';
          if (_this.checkType=="data"){
            url = url + _this.lat+':'+_this.lon;
          }
          else {
            url = url+_this.city;
          }
          this.$http.get(url).then(function (res) {
            _this.location=res.data.info.results[0].location
            _this.now=res.data.info.results[0].now
            _this.last_update = res.data.info.results[0].last_update

          })
        },
        getWeekWeather(){
          var _this = this;
          var url = "/apis/getdailyweather?location=";
          if (_this.checkType=="data"){
            url = url + _this.lat+':'+_this.lon;
          }
          else {
            url = url+_this.city;
          }
          this.$http.get(url).then(function (res) {
            _this.weekData = res.data.info.results[0].daily;
            _this.high = _this.weekData[0].high;
            _this.low = _this.weekData[0].low;
          })
        }
      },
      created() {
        this.getLifeData();
        this.getNowWeather();
        this.getWeekWeather();
      }
    }
</script>

<style scoped>

</style>
