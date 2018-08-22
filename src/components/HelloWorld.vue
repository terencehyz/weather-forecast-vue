<template>
  <div>
    <Weather
      v-if="lat"
      :lat="lat"
      :lon="lon"
      :city="city"
      :checkType="queryType"
    ></Weather>
  </div>
</template>

<script>
  import Weather from './Weather'

  export default {
    name: 'HelloWorld',
    components: {Weather},
    data() {
      return {
        lat:"",
        lon:"",
        queryType:"data",
        city:""
      }
    },
    methods: {
      GaoDeAPI(){
        var _this = this;
        var map, geolocation;
        //加载地图，调用浏览器定位服务
        map = new AMap.Map('FakeContainer', {
          resizeEnable: true
        });
        map.plugin('AMap.Geolocation', function() {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
          AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
          var str=['定位成功'];
          str.push('经度：' + data.position.getLng());
          str.push('纬度：' + data.position.getLat());
          _this.lon = data.position.getLng();
          _this.lat = data.position.getLat();
          var c = data.addressComponent.city;
          localStorage.setItem('currentCity',c);
          console.log(c);
          if(data.accuracy){
            str.push('精度：' + data.accuracy + ' 米');
          }//如为IP精确定位结果则没有精度信息
          str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
          //console.log(str);
        }
        //解析定位错误信息
        function onError(data) {
          console.log("gaode:"+data.message);
        }
      },
      getUserCurrentLocation() {
        var _this = this;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            // 估算的纬度
            _this.lon = position.coords.longitude;
            _this.lat = position.coords.latitude;
            //console.log(position);
            //console.log(position.coords.latitude);
            // 估算的经度
            //console.log(position.coords.longitude);
          }, locationError, {
            // 指示浏览器获取高精度的位置，默认为false
            enableHighAcuracy: true,
            // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
            timeout: 5000,
            // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
            maximumAge: 60000
          });
        }
        else {
          console.log('h5-您的浏览器不支持，请手动定位');
        }

        function locationError(error) {
          switch (error.code) {
            case 1:
              console.log("h5-位置服务被拒绝");
              break;

            case 2:
              console.log("h5-暂时获取不到位置信息");
              break;

            case 3:
              console.log("h5-获取信息超时");
              break;

            case 4:
              console.log("h5-未知错误");
              break;
          }
        }

      }
    },
    mounted() {
      //this.getUserCurrentLocation();
      //localStorage.setItem('cityList',JSON.stringify(a));
      this.GaoDeAPI();
      localStorage.removeItem("choosen");
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#FakeContainer{
  display: none;
}
</style>
