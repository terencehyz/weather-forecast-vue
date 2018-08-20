<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      健康指数
    </mu-appbar>
    <div class="card">
      <mu-container>
        <p class="data">{{newDate}}</p>
        <p class="Air__Title">感觉{{mood.brief}}</p>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/空调.png" alt="空调" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{ac.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/过敏标识.png" alt="过敏" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{allergy.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/低温.png" alt="低温" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{chill.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/沙发.png" alt="舒适度" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{comfort.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/感冒咳嗽.png" alt="感冒" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{flu.details}}</p>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="2">
            <img src="../assets/images/cards/icon/开心-2.png" alt="心情" class="data__img">
          </mu-col>
          <mu-col span="10">
            <p class="superData">{{mood.details}}</p>
          </mu-col>
        </mu-row>

        <mu-row gutter>
          <mu-col span="6" offset="6">
            <img src="../assets/images/cards/drag.png" alt="健康指数" class="card__img">
          </mu-col>
        </mu-row>
      </mu-container>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Health",
    data(){
      return{
        ac:{},
        allergy:{},
        chill:{},
        comfort:{},
        flu:{},
        mood:{}
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
      this.ac = this.$route.params.ac ;
      this.allergy = this.$route.params.allergy;
      this.chill = this.$route.params.chill;
      this.comfort = this.$route.params.comfort ;
      this.flu = this.$route.params.flu;
      this.mood = this.$route.params.mood;
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
