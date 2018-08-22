<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      老黄历
    </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="Air__Title">{{cal.ganzhi_year}}年{{cal.ganzhi_month}}月</p>
        <mu-paper v-show="!cal.solar_term" :z-depth="1" class="demo-date-picker">
          <mu-date-picker color="#4F6E77" :date.sync="date"></mu-date-picker>
        </mu-paper>
        <img v-show="cal.solar_term" src="../assets/images/SolarTerms/1.gif" alt="节气"  oncontextmenu="return false;" ondragstart="return false;" class="solar">
        <mu-row gutter>
          <mu-col span="6">
            <img src="../assets/images/cards/cal.png" alt="空气质量" oncontextmenu="return false;" ondragstart="return false;" class="card__img">
          </mu-col>
          <mu-col span="3">
            <img src="../assets/images/cards/icon/宜.png" alt="宜" oncontextmenu="return false;" ondragstart="return false;" class="sm__img">
            <div class="postive">
              <span v-for="(item,index) in yi" :key="index">{{item}} </span>
              <br>
            </div>

          </mu-col>
          <mu-col span="3">
            <img src="../assets/images/cards/icon/忌.png" alt="忌" oncontextmenu="return false;" ondragstart="return false;" class="sm__img">
            <div class="negative">
              <span v-for="(item,index) in ji" :key="index">{{item}} </span>
              <br>
            </div>
          </mu-col>
        </mu-row>
      </mu-container>

    </div>
  </div>

</template>

<script>
  export default {
    name: "Cal",
    data(){
      return{
        date:undefined,
        cal:{},
        lon:"",
        lat:"",
        city:"",
        checkType:"",
        yi:[],
        ji:[]
      }
    },
    methods:{
      back(){
        this.$router.back();
      },
      getData(){
        var _this = this;
        var url = '/apis/getcalendarlife?location=hhht';
        /*if (_this.checkType=="data"){
          url = url + _this.lat+':'+_this.lon;
        }
        else {
          url = url+_this.city;
        }*/
        this.$http.get(url).then(function (res) {
          _this.cal = res.data.info.results.chinese_calendar[0];
          _this.yi = _this.cal.yi;
          _this.ji = _this.cal.ji;
        })
      }
    },
    computed:{
      newDate: function () {
        var date = new Date().toLocaleString().slice(0,10);
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
  .solar{
    width: 100%;
  }
  .postive{
    color: rgb(243,192,119);
    text-align: center;
  }
  .negative{
    color: rgb(79,110,119);
    text-align: center;
  }
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
    margin-top: 3rem;
  }
  .data{
    font-size: 1.2rem;
  }
  .superData{
    font-size: 1.5rem;
  }
  .sm__img{
    width: 2rem;
    display: block;
    margin: 0 auto;
    margin-top: 3rem;
  }
</style>
