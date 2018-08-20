<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      风力指数
    </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="data">{{newDate}}</p>
        <p class="Air__Title">{{wind_scale}}级</p>
        <p class="superData">风速 <strong>{{wind_speed}} km/h</strong></p>
        <p class="superData">风向 <strong>{{wind_direction}}风</strong></p>
        <mu-row>
          <mu-col span="6" offset="6">
            <img src="../assets/images/cards/wind.png" alt="美妆指数" class="card__img">
          </mu-col>
        </mu-row>
      </mu-container>

    </div></div>
</template>

<script>
  export default {
    name: "WindCondition",
    data(){
      return{
        wind_direction:"",
        wind_direction_degree :"",
        wind_speed:"",
        wind_scale :""
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
        return date.replace(/-/g," / ");
      }
    },
    created(){
      this.wind_direction = this.$route.params.wind_direction ;
      this.wind_direction_degree = this.$route.params.wind_direction_degree;
      this.wind_speed = this.$route.params.wind_speed ;
      this.wind_scale = this.$route.params.wind_scale;
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
    margin-top: 7rem;
  }
  .data{
    font-size: 1.2rem;
  }
  .superData{
    font-size: 1.35rem;
  }

</style>

