<template>
  <div class="card">
    <mu-container>
      <mu-row>
        <mu-col>
          <img src="../assets/images/cards/back.svg" alt="返回主页" class="backButton" @click="back()">
          <span class="back">美妆</span>
        </mu-col>
      </mu-row>
      <p class="data dataStart">{{newDate}}</p>
      <p class="Air__Title">注意{{AirData.quality}}</p>
      <p class="superData">空气指数{{AirData.aqi}}</p>
      <mu-row>
        <mu-col span="6" offset="6">
          <img src="../assets/images/cards/makeup.png" alt="美妆" class="card__img">
        </mu-col>
      </mu-row>
    </mu-container>

  </div>
</template>

<script>
  export default {
    name: "MakeUpCondition",
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
      }
    },
    data(){
      return{
        AirData:{},
        lastUpdate:""
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
  .back{
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.5rem;
  }
  .dataStart{
    padding-top: 2.5rem;
  }
  .backButton{
    width: 1.5rem;
    display: inline;
    line-height: 1.5rem;
  }
</style>
