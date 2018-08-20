<template>
    <div>
        <NormalInfo
        v-bind:windSpeed="now.wind_speed"
        v-bind:air="now.quality"
        v-bind:humidity="now.humidity"
        v-bind:value="now.temperature"
        v-bind:wind_direction="now.wind_direction"
        v-bind:wind_direction_degree="now.wind_direction_degree"
        v-bind:wind_scale="now.wind_scale"
        v-bind:lon="lon"
        v-bind:lat="lat"
        v-bind:city="city"
        v-bind:checkType="checkType"
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
        <SunRise></SunRise>
        <GridData
          :visibility="now.visibility"
          :feels_like="now.feels_like"
          :pressure="now.pressure"
        ></GridData>
        <LifeData
          v-if="this.Detail!=undefined"
          :life-data="this.lifeData"
          :detail="this.Detail"
        ></LifeData>
    </div>
</template>

<script>
  import NormalInfo from './NormalInfo'
  import LocationInfo from './LocationInfo'
  import IconInfo from './IconInfo'
  import LifeData from './LifeData'
  import GridData from './GirdData'
  import WeekWeather from './WeekWeather'
  import HourWeather from './HourWeather'
  import YoScroll from './YoScroll'
  import SunRise from './SunRise'
    export default {
      components: {NormalInfo,LocationInfo,IconInfo,LifeData,GridData,WeekWeather,HourWeather,YoScroll,SunRise},
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
          lifeData:{},
          location:{},
          now:{},
          last_update:{},
          weekData:[],
          high:0,
          low:0,
          Detail:{}
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
        getLifeDataDeatil(){
          var url = '/apis/getsuggestionlife?location=';
          var _this = this;
          if (_this.checkType=="data"){
            url = url + _this.lat+':'+_this.lon;
          }
          else {
            url = url+_this.city;
          }
          this.$http.get(url).then(function (res) {
            _this.Detail = res.data.info.results[0].suggestion;
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
        this.getNowWeather();
        this.getWeekWeather();
        this.getLifeData();
        this.getLifeDataDeatil();
      }
    }
</script>

<style scoped>

</style>
