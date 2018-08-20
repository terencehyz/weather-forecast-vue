<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      娱乐指数
    </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="data">{{newDate}}</p>
        <p class="Air__Title">{{dating.brief}}娱乐活动</p>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/约会.png" alt="约会" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{dating.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/啤酒.png" alt="啤酒" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{beer.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/shop.png" alt="购物" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{shopping.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/面具.png" alt="酒吧" class="data__img">
          </mu-col>
          <mu-col span="10"><p class="superData">{{night_life.details}}</p></mu-col>
        </mu-row>

        <mu-row>
          <mu-col span="6" offset="6">
            <img src="../assets/images/cards/rntertainer.png" alt="娱乐指数" class="card__img">
          </mu-col>
        </mu-row>
      </mu-container>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Entertainment",
    data(){
      return{
        beer:{},
        dating:{},
        night_life:{},
        shopping:{}
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
      this.beer=this.$route.params.beer;
      this.dating=this.$route.params.dating;
      this.night_life=this.$route.params.night_life;
      this.shopping=this.$route.params.shopping;
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
