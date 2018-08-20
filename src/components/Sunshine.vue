<template>
<div>
  <mu-appbar style="width: 100%;" color="white" textColor="black">
    <mu-button icon slot="left" @click="back()">
      <mu-icon value="arrow_back" ></mu-icon>
    </mu-button>
    紫外线指数
  </mu-appbar>
  <div class="card">
    <mu-container>
      <p class="data">{{newDate}}</p>
      <p class="Air__Title">紫外线强度{{sunscreen.brief}}</p>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/紫外线指数.png" alt="紫外线" class="data__img">
        </mu-col>
        <mu-col span="10"><p class="superData">{{uv.details}}</p></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/帽子.png" alt="帽子" class="data__img">
        </mu-col>
        <mu-col span="10"><p class="superData">{{sunscreen.details}}</p></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="2">
          <img src="../assets/images/cards/icon/晾衣服.png" alt="晾晒" class="data__img">
        </mu-col>
        <mu-col span="10"><p class="superData">{{airing.details}}</p></mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="6" offset="6">
          <img src="../assets/images/cards/sun.png" alt="紫外线强度" class="card__img">
        </mu-col>
      </mu-row>
    </mu-container>

  </div>
</div>
</template>

<script>
  export default {
    name: "Sunshine",
    data(){
      return{
        airing:{},
        sunscreen:{},
        uv:{}
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
      this.airing = this.$route.params.airing ;
      this.sunscreen = this.$route.params.sunscreen;
      this.uv = this.$route.params.uv;
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
