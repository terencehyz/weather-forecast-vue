<template>
  <mu-container class="LifeDataContainer">
    <mu-row>
      <mu-col span="3">
        <div class="LifeGrid">
          <img src="../assets/images/LifeData/calander.png" alt="生活信息">
          <p>{{lifeData.date}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid">
          <img src="../assets/images/LifeData/cloth.png" alt="穿衣指数">
          <p>{{lifeData.dressing}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid">
          <img src="../assets/images/LifeData/sunshine.png" alt="生活信息">
          <p>{{lifeData.uv}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid CanMar">
          <img src="../assets/images/LifeData/sports.png" alt="生活信息">
          <p>{{lifeData.sport}}</p>
        </div>
      </mu-col>
    </mu-row>
    <mu-row >
      <mu-col span="3">
        <div class="LifeGrid">
          <img src="../assets/images/LifeData/health.png" alt="生活信息">
          <p>{{lifeData.air_pollution}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid">
          <img src="../assets/images/LifeData/transport.png" alt="交通指数">
          <p>{{lifeData.traffic}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid">
          <img src="../assets/images/LifeData/entertainment.png" alt="娱乐指数">
          <p>{{lifeData.goout}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid CanMar">
          <img src="../assets/images/LifeData/makeup.png" alt="美妆指数">
          <p>{{lifeData.makeup}}</p>
        </div>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
    export default {
      name: "LifeData",
      props: {
        lifeData:{
          required: true
        }
      }
    }
</script>

<style scoped>
  .LifeDataContainer{
    background-color: rgba(255,255,255,0.9);
    padding-top: 0.35rem;
  }
  .LifeGrid {
    background-color: white;
    padding-top: 0.35rem;
    padding-bottom: 0.2rem;
    margin-bottom: 0.35rem;
    margin-right: 0.35rem;
  }

  .CanMar {
    margin-right: 0;
  }

  .LifeGrid p{
    text-align: center;
    color: #67A7B9;
    margin-top: 0.25rem;
    margin-bottom: 0.1rem;
  }
  .LifeGrid img{
    width: 35px;
    display: block;
    margin: 0 auto;
  }
</style>
