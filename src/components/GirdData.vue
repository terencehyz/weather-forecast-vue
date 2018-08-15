<template>
  <mu-container class="LifeDataContainer">
    <mu-row>
      <mu-col span="4">
        <div class="LifeGrid">
          <p>体感温度</p>
          <p>{{feels_like}}</p>
        </div>
      </mu-col>
      <mu-col span="4">
        <div class="LifeGrid">
          <p>气压</p>
          <p>{{pressure}}百帕</p>
        </div>
      </mu-col>
      <mu-col span="4">
        <div class="LifeGrid CanMar">
          <p>能见度</p>
          <p>{{visibility}}公里</p>
        </div>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
    export default {
      name: "GirdData",
      props: {
        feels_like:{
          required:true
        },
        pressure:{
          required:true
        },
        visibility:{
          required:true
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
    margin-bottom: 0.5rem;
    margin-right: 0.35rem;
  }
  .LifeGrid p{
    text-align: center;
    color: #67A7B9;
    margin-top: 0.25rem;
    margin-bottom: 0.1rem;
  }
  .CanMar {
    margin-right: 0;
  }
</style>
