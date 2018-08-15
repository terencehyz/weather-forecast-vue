<template>
  <div>

  </div>
</template>

<script>
import CityComponent from "./City";
export default {
  name: 'HelloWorld',
  components: {CityComponent},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      infos:[]
    }
  },
  methods: {
    getUserCurrentLocation() {
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
          // 估算的纬度
          console.log(position.coords.latitude);
          // 估算的经度
          console.log(position.coords.longitude);
        },locationError, {
          // 指示浏览器获取高精度的位置，默认为false
          enableHighAcuracy: true,
          // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
          timeout: 5000,
          // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
          maximumAge: 60000
        });
      }
      else{
        alert('您的浏览器不支持，请手动定位');
      }

      function locationError(error) {
        switch (error.code) {
          case 1:
            alert("位置服务被拒绝");
            break;

          case 2:
            alert("暂时获取不到位置信息");
            break;

          case 3:
            alert("获取信息超时");
            break;

          case 4:
            alert("未知错误");
            break;
        }
      }

    },
    testData() {
      var _this = this;
      var url = '/api/MyData';
      this.$http.get(url).then(function (res) {
        _this.infos = res.data.data;
        console.log(_this.infos);
      })
    }
  },
  created() {
    this.getUserCurrentLocation();
    this.testData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
