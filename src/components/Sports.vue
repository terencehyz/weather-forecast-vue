<template>
<div>
  <mu-appbar style="width: 100%;" color="white" textColor="black">
    <mu-button icon slot="left" @click="back()">
      <mu-icon value="arrow_back" ></mu-icon>
    </mu-button>
    运动指数
  </mu-appbar>
  <div class="card">
    <mu-container>
      <p class="data">{{newDate}}</p>
      <p class="Air__Title">{{sport.brief}}运动</p>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/帆船.png" alt="船" class="data__img">
        </mu-col>
        <mu-col span="10">
          <p class="superData">{{boating.details}}</p>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/鱼.png" alt="鱼" class="data__img">
        </mu-col>
        <mu-col span="10">
          <p class="superData">{{fishing.details}}</p>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/自行车.png" alt="晨练" class="data__img">
        </mu-col>
        <mu-col span="10">
          <p class="superData">{{morning_sport.details}}</p>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/风筝.png" alt="风筝" class="data__img">
        </mu-col>
        <mu-col span="10"><p class="superData">{{kiteflying.details}}</p></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/旅游文化.png" alt="旅游" class="data__img">
        </mu-col>
        <mu-col span="10"><p class="superData">{{travel.details}}</p></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/空气洗02.png" alt="空气" class="data__img">
        </mu-col>
        <mu-col span="10"><p class="superData">{{air_pollution.details}}</p></mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="6" offset="6">
          <img src="../assets/images/cards/sport.png" alt="运动指数" class="card__img">
        </mu-col>
      </mu-row>
    </mu-container>

  </div>
</div>
</template>

<script>
  export default {
    name: "Sports",
    data(){
      return{
        air_pollution:{},
        boating:{},
        fishing:{},
        kiteflying:{},
        morning_sport:{},
        sport:{},
        travel:{}
      }
    },
    methods:{
      back(){
        this.$router.back();
      }
    },
    computed:{
      newDate: function () {
        var date = new Date().toLocaleString().slice(0,10);
        return date.replace(/-/g,"/");
      }
    },
    created(){
      this.air_pollution=this.$route.params.air_pollution;
      this.boating=this.$route.params.boating;
      this.fishing=this.$route.params.fishing;
      this.kiteflying=this.$route.params.kiteflying;
      this.morning_sport=this.$route.params.morning_sport;
      this.sport=this.$route.params.sport;
      this.travel=this.$route.params.travel;
    }
  }
</script>

<style scoped>
  .card{
    padding: 1rem;
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
    margin-top: 2rem;
  }
  .data{
    font-size: 1rem;
  }
  .superData{
    font-size: 1.1rem;
  }
  .data__img{
    width: 100%;
  }

</style>
