<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      交通指数
    </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="data">{{newDate}}</p>
        <p class="Air__Title">路况{{traffic.brief}}</p>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/道路.png" alt="路况" class="data__img">
          </mu-col>
          <mu-col span="10"><p class="superData">{{road_condition.details}}</p></mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/红绿灯.png" alt="交通" class="data__img">
          </mu-col>
          <mu-col span="10"><p class="superData">{{traffic.details}}</p></mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/免费洗车.png" alt="洗车" class="data__img">
          </mu-col>
          <mu-col span="10"><p class="superData">{{car_washing.details}}</p></mu-col>
        </mu-row>
        <mu-row>
          <mu-col span="6" offset="6">
            <img src="../assets/images/cards/transport.png" alt="穿衣指数" class="card__img">
          </mu-col>
        </mu-row>
      </mu-container>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Transport",
    data(){
      return{
        car_washing:{},
        road_condition:{},
        traffic:{}
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
      this.car_washing = this.$route.params.car_washing ;
      this.road_condition = this.$route.params.road_condition;
      this.traffic = this.$route.params.traffic;
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
