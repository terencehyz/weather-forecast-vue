<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
    <mu-button icon slot="left" @click="back()">
      <mu-icon value="arrow_back" ></mu-icon>
    </mu-button>
    美妆指数
  </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="data">{{newDate}}</p>
        <p class="Air__Title">注意{{makeup.brief}}</p>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/化妆.png" alt="化妆" class="data__img">
          </mu-col>
          <mu-col span="10"><p class="superData">{{makeup.details}}</p></mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/美发造型.png" alt="美发" class="data__img">
          </mu-col>
          <mu-col span="10"><p class="superData">{{hair_dressing.details}}</p></mu-col>
        </mu-row>
        <mu-row>
          <mu-col span="6" offset="6">
            <img src="../assets/images/cards/makeup.png" alt="美妆指数" class="card__img">
          </mu-col>
        </mu-row>
      </mu-container>

    </div></div>
</template>

<script>
  export default {
    name: "Dressing",
    data(){
      return{
        makeup:{},
        hair_dressing:{}
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
      this.hair_dressing = this.$route.params.hair_dressing ;
      this.makeup = this.$route.params.makeup;
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
