<template>
  <div class="night">

    <mu-container style="padding: 0">
      <mu-row class="d2" v-if="list.length" :style="{backgroundImage:'url(http://pde0lokle.bkt.clouddn.com/'+list[0].results[0].location.name+dayOrNight+'.jpg'}">
        <mu-col span="9">
          <div class="d3">
            {{list[0].results[0].now.text}}
          </div>
          <div class="d4">
            {{list[0].results[0].location.name}}
          </div>
        </mu-col>
        <mu-col span="3">
          <div class="d5">
            {{list[0].results[0].now.temperature}}
          </div>
        </mu-col>
      </mu-row>
      <slip-del
        v-for="(item, i) in list"
        :key="i"
        ref="slipDel"
        @slip-open="slipOpen"
        @del-click="del(i)"
        v-if="i!=0"
      >
        <div class="demo-item">
          <mu-row class="d2" :style="{backgroundImage:'url(http://pde0lokle.bkt.clouddn.com/'+item.results[0].location.name+dayOrNight+'.jpg'}">
            <mu-col span="9">
              <div class="d3">
                {{item.results[0].now.text}}
              </div>
              <div class="d4">
                {{item.results[0].location.name}}
              </div>
            </mu-col>
            <mu-col span="3">
              <div class="d5">
                {{item.results[0].now.temperature}}
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div slot="del">
          <mu-icon size="32" value="delete" style="display: block; margin: 0 auto;"></mu-icon>
        </div>
      </slip-del>
    </mu-container>

    <!--<div>
          <img src="http://pde0lokle.bkt.clouddn.com/%E6%88%90%E9%83%BD1.jpg" class="d6">
      </div>-->
  </div>
</template>

<script>
  import SlipDel from 'vue-slip-delete'

  export default {
    name: "CityComponent",
    components: {SlipDel},
    data() {
      return {
        list: []
      }
    },
    computed:{
      dayOrNight:function () {
        var d = new Date();
        if (d.getHours()>=6&&d.getHours()<=18)
          return 1
        else
          return 2
      }
    },
    methods: {
      getData() {
        var _this = this;
        var cities = localStorage.getItem('currentCity');
        var c = JSON.parse(localStorage.getItem('cityList'));
        //console.log(c);
        if (c!=undefined) {
          for (var ind = 0; ind < c.length; ind++){
            cities = cities +','+ c[ind];
          }
        }
        var url = 'apis/getlistnowweather?locationlist='+cities;
        this.$http.get(url).then(function (res) {
          _this.list = res.data.info;
        });
      },
      slipOpen(vm) {
        // 无需手动关闭
      },
      del(i) {
        var cities = JSON.parse(localStorage.getItem('cityList'));
        cities.splice(i-1,1);
        this.list.splice(i,1);
        localStorage.setItem('cityList',JSON.stringify(cities));
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped>
  /*白天主题*/
  .day {
    background-color: white;
    border: 0px;
  }

  /*夜晚主题*/
  .night {
    background-color: #1C2626;
    border: 0px;
  }

  .d2 {
    /*background-image: url("http://pde0lokle.bkt.clouddn.com/%E6%88%90%E9%83%BD1.jpg");*/
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

  .d3 {
    color: white;
    font-size: 1.3rem;
    padding-top: 2.5rem;
    padding-left: 0.5rem;
    text-shadow: 0.1em 0.1em 0.08em black
  }

  .d4 {
    color: white;
    font-size: 2.2rem;
    padding-left: 0.7rem;
    margin-top: -0.5rem;
    text-shadow: 0.1em 0.1em 0.08em black
  }

  .d5 {
    color: white;
    font-size: 4.4rem;
    margin-top: 0.87rem;
    padding-right: 0.5rem;
    float: right;
    text-shadow: 0.05em 0.05em 0.05em black
  }

  .d6 {
    margin-top: 0.5rem;
    margin-left: 21.1rem;
    width: 30px;
    height: 30px;
  }

</style>
