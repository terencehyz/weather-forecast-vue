<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      空气质量
    </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="data">{{newDate}}</p>
        <p class="Air__Title">空气质量{{AirData.quality}}</p>
        <p class="superData">空气指数{{AirData.aqi}}</p>
        <mu-row class="data">
          <mu-col span="6">
            <span>PM2.5 &nbsp; <strong>{{AirData.pm25}}</strong> </span>
          </mu-col>
          <mu-col span="6">
            <span>PM10 &nbsp; <strong>{{AirData.pm10}}</strong></span>
          </mu-col>
        </mu-row>
        <mu-row class="data">
          <mu-col span="6">
            <span>SO<sub>2 &nbsp; </sub> <strong>{{AirData.so2}}</strong> </span>
          </mu-col>
          <mu-col span="6">
            <span>CO &nbsp; <strong>{{AirData.co}}</strong> </span>
          </mu-col>
        </mu-row>
        <mu-row class="data">
          <mu-col span="6">
            <span>NO<sub>2</sub> &nbsp; <strong>{{AirData.no2}}</strong> </span>
          </mu-col>
          <mu-col span="6">
            <span>O<sub>3</sub> &nbsp; <strong>{{AirData.o3}}</strong> </span>
          </mu-col>
        </mu-row>
        <mu-row>
          <mu-col span="6" offset="6">
            <img src="../assets/images/cards/air.png" alt="空气质量" class="card__img">
          </mu-col>
        </mu-row>
      </mu-container>

    </div>
  </div>

</template>

<script>
    export default {
      name: "AirCondition",
      data(){
        return{
          AirData:{},
          lastUpdate:"",
          lon:"",
          lat:"",
          city:"",
          checkType:""
        }
      },
      methods:{
        back(){
          this.$router.back();
        },
        getData(){
          var _this = this;
          var url = '/apis/getnowair?location=';
          if (_this.checkType=="data"){
            url = url + _this.lat+':'+_this.lon;
          }
          else {
            url = url+_this.city;
          }
          this.$http.get(url).then(function (res) {
            _this.AirData=res.data.info.results[0].air.city;
            _this.lastUpdate = _this.AirData.last_update;
          })
        }
      },
      computed:{
        newDate: function () {
          var date = this.lastUpdate.slice(0,10);
          return date.replace(/-/g,"/");
        }
      },
      created(){
        this.lon = this.$route.params.lon ;
        this.lat = this.$route.params.lat;
        this.city = this.$route.params.city;
        this.checkType = this.$route.params.checkType;
        this.getData();
      }
    }
</script>

<style scoped>
  .card{
    padding: 2rem;
    background-color: white;
  }
  p{
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .Air__Title{
    color: #B32025;
    font-size: 2.5rem;
  }
  .card__img{
    width: 100%;
    margin-top: 8rem;
  }
  .data{
    font-size: 1.2rem;
  }
  .superData{
    font-size: 1.5rem;
  }

</style>
