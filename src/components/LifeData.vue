<template>
  <mu-container class="LifeDataContainer">
    <mu-row>
      <mu-col span="3">
        <div class="LifeGrid" @click="navToDetail(1)">
          <img src="../assets/images/LifeData/calander.png" alt="生活信息" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.date}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid" @click="navToDetail(2)">
          <img src="../assets/images/LifeData/cloth.png" alt="穿衣指数" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.dressing}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid" @click="navToDetail(3)">
          <img src="../assets/images/LifeData/sunshine.png" alt="生活信息" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.uv}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid CanMar" @click="navToDetail(4)">
          <img src="../assets/images/LifeData/sports.png" alt="生活信息" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.sport}}</p>
        </div>
      </mu-col>
    </mu-row>
    <mu-row >
      <mu-col span="3">
        <div class="LifeGrid" @click="navToDetail(5)">
          <img src="../assets/images/LifeData/health.png" alt="生活信息" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.air_pollution}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid" @click="navToDetail(6)">
          <img src="../assets/images/LifeData/transport.png" alt="交通指数" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.traffic}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid" @click="navToDetail(7)">
          <img src="../assets/images/LifeData/entertainment.png" alt="娱乐指数" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.goout}}</p>
        </div>
      </mu-col>
      <mu-col span="3">
        <div class="LifeGrid CanMar" @click="navToDetail(8)">
          <img src="../assets/images/LifeData/makeup.png" alt="美妆指数" oncontextmenu="return false;" ondragstart="return false;">
          <p>{{lifeData.makeup}}</p>
        </div>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
    import index from "../router";

    export default {
      name: "LifeData",
      props: {
        lifeData:{
          required: true
        },
        detail:{
          required: true
        }
      },
      methods:{
        navToDetail(num){
          var _this = this;
          //console.log(this.detail);
          switch (num) {
            case 1:
              this.$router.push({
                path: '/Cal',
                name: 'Cal',
                params: {
                }
              });
              break;
            case 2:
              this.$router.push({
                path: '/Dressing',
                name: 'Dressing',
                params: {
                  dressing:this.detail.dressing,
                  umbrella:this.detail.umbrella
                }
              });
              break;
            case 3:
              this.$router.push({
                path: '/Sunshine',
                name: 'Sunshine',
                params: {
                  airing:this.detail.airing,
                  sunscreen:this.detail.sunscreen,
                  uv:this.detail.uv
                }
              });
              break;
            case 4:
              this.$router.push({
                path: '/Sports',
                name: 'Sports',
                params: {
                  air_pollution:this.detail.air_pollution,
                  boating:this.detail.boating,
                  fishing:this.detail.fishing,
                  kiteflying:this.detail.kiteflying,
                  morning_sport:this.detail.morning_sport,
                  sport:this.detail.sport,
                  travel:this.detail.travel
                }
              });
              break;
            case 5:
              this.$router.push({
                path: '/Health',
                name: 'Health',
                params: {
                  ac:this.detail.ac,
                  allergy:this.detail.allergy,
                  chill:this.detail.chill,
                  comfort:this.detail.comfort,
                  flu:this.detail.flu,
                  mood:this.detail.mood
            }
              });
              break;
            case 6:
              this.$router.push({
                path: '/Transport',
                name: 'Transport',
                params: {
                  car_washing:this.detail.car_washing,
                  road_condition:this.detail.road_condition,
                  traffic:this.detail.traffic
                }
              });
              break;
            case 7:
              this.$router.push({
                path: '/Entertainment',
                name: 'Entertainment',
                params: {
                  beer:this.detail.beer,
                  dating:this.detail.dating,
                  night_life:this.detail.night_life,
                  shopping:this.detail.shopping
                }
              });
              break;
            case 8:
              this.$router.push({
                path: '/MakeUp',
                name: 'MakeUp',
                params: {
                  hair_dressing: this.detail.hair_dressing,
                  makeup:this.detail.makeup
                }
              });
              break;
          }
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
    font-size: 1.1rem;
  }
  .LifeGrid img{
    width: 35px;
    display: block;
    margin: 5px auto;
  }
</style>
