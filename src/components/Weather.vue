<template>
  <mu-container ref="container" style="padding: 0">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" :loading-text="localPeom">
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
        <SunRise v-if="lon!=undefined||lat!=undefined"
                 :lon="lon"
                 :lat="lat"
                 :city="city"
        ></SunRise>
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
        <div class="full" v-if="loading">
          <span>{{poem}}</span>
        </div>
        <div class="foot">
          <mu-container>
            <mu-row>
              <mu-col span="3">
                <mu-button icon @click="navToCity">
                  <mu-icon value="menu"></mu-icon>
                </mu-button>
              </mu-col>
              <mu-col span="3" offset="6">
                <mu-menu cover placement="bottom-end" :open.sync="open" style="float: right">
                  <mu-button icon>
                    <mu-icon value="more_vert"></mu-icon>
                  </mu-button>
                  <mu-list slot="content">
                    <mu-list-item button @click="audioGet()">
                      <mu-list-item-title>语音播报</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                      <mu-list-item-title>天气实验室</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                      <mu-list-item-title>视频播报</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                      <mu-list-item-title>分享天气</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button @click="open = !open">
                      <mu-list-item-title>取消</mu-list-item-title>
                    </mu-list-item>
                  </mu-list>
                </mu-menu>
              </mu-col>
            </mu-row>
          </mu-container>
        </div>
      </div>
    </mu-load-more>
  </mu-container>
</template>

<script>
  import NormalInfo from './NormalInfo'
  import LocationInfo from './LocationInfo'
  import IconInfo from './IconInfo'
  import LifeData from './LifeData'
  import GridData from './GirdData'
  import WeekWeather from './WeekWeather'
  import HourWeather from './HourWeather'
  import SunRise from './SunRise'

  export default {
    components: {NormalInfo, LocationInfo, IconInfo, LifeData, GridData, WeekWeather, HourWeather, SunRise},
    props: {
      lat: {
        required: true
      },
      lon: {
        required: true
      },
      city: {
        required: false
      },
      checkType: {
        required: true
      }
    },
    name: "Home",
    data() {
      return {
        AudioURL:"",
        testlist:null,
        open:false,
        lifeData: {},
        location: {},
        now: {},
        last_update: {},
        weekData: [],
        high: 0,
        low: 0,
        Detail: {},
        poem:"",
        localPeom:" ",
        num: 10,
        refreshing: false,
        loading: false
      }
    },
    methods: {
      audioGet(){
        var _this = this;
        var url = '/apis/getspeech?location=';
        if (_this.city == undefined || _this.city == null|| _this.city == "") {
          url = url + _this.lat + ':' + _this.lon;
        }
        else {
          url = url + _this.city;
        }
        this.$http.get(url).then(function (res) {
          _this.AudioURL = res.data.info;
          if (_this.testlist != null) {
            _this.testlist.pause();
          }
          let audio = new Audio(_this.AudioURL);
          _this.testlist = audio;
          audio.play();
        })
      },
      refresh(){
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        this.getNowWeather();
        this.getWeekWeather();
        this.getLifeData();
        this.getLifeDataDeatil();
        this.getPoem();
        this.refreshing = false;
      },
      load(){
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.num += 10;
        }, 10000)
      },
      navToCity(){
        this.$router.push({
          path: '/City',
          name: 'City'
        });
      },
      getLifeData() {
        var url = '/apis/getbriefsuggestionlife?location=';
        var _this = this;
        if (_this.city == undefined || _this.city == null|| _this.city == "") {
          url = url + _this.lat + ':' + _this.lon;
        }
        else {
          url = url + _this.city;
        }
        this.$http.get(url).then(function (res) {
          _this.lifeData = res.data.info;
        })
      },
      getLifeDataDeatil() {
        var url = '/apis/getsuggestionlife?location=';
        var _this = this;
        if (_this.city == undefined || _this.city == null|| _this.city == "") {
          url = url + _this.lat + ':' + _this.lon;
        }
        else {
          url = url + _this.city;
        }
        this.$http.get(url).then(function (res) {
          _this.Detail = res.data.info.results[0].suggestion;
        })
      },
      getNowWeather() {
        var _this = this;
        var url = '/apis/getNowWeather?location=';
        if (_this.city == undefined || _this.city == null|| _this.city == "") {
          url = url + _this.lat + ':' + _this.lon;
        }
        else {
          url = url + _this.city;
        }
        this.$http.get(url).then(function (res) {
          _this.location = res.data.info.results[0].location
          _this.now = res.data.info.results[0].now
          _this.last_update = res.data.info.results[0].last_update

        })
      },
      getWeekWeather() {
        var _this = this;
        var url = "/apis/getdailyweather?location=";
        if (_this.city == undefined || _this.city == null|| _this.city == "") {
          url = url + _this.lat + ':' + _this.lon;
        }
        else {
          url = url + _this.city;
        }
        this.$http.get(url).then(function (res) {
          _this.weekData = res.data.info.results[0].daily;
          _this.high = _this.weekData[0].high;
          _this.low = _this.weekData[0].low;
        })
      },
      getPoem(){
        var _this = this;
        var url = '/apis/getpoem?poemtitle='+'雨';
        this.$http.get(url).then(function (res) {
          _this.poem =  res.data.info;
        })
      }
    },
    created() {
      this.getNowWeather();
      this.getWeekWeather();
      this.getLifeData();
      this.getLifeDataDeatil();
      this.getPoem();
    }
  }
</script>

<style scoped>
  .foot {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 3rem;
    background-color: rgba(255,255,255,0.5);
    z-index: 999;
    display: inline-block;
  }

  .full {
    height: 3rem;
    width: 100%;
    background: rgba(255,255,255,0.9);
  }

  .full span{
    line-height: 3rem;
    text-align: center;
    font-size: 1.2rem;
    display: block;
    font-family: "Adobe 仿宋 Std R";
  }
</style>
