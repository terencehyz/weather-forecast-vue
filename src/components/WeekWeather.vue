<template>
  <div class="weekWeather">
    <mu-container>
      <mu-row gutter v-for="(data,index) in weekData" :key="index" v-if="index!=0">
        <mu-col span="4" class="weekInfo">{{data.week}}</mu-col>
        <mu-col span="4" class="iconInfo">
          <img :src="imgList[data.code_day]" alt="weather" class="weekWeatherImg" ondragstart="return false;" oncontextmenu="return false;">
        </mu-col>
        <mu-col span="4" class="Temper">{{data.high}}&nbsp;&nbsp;&nbsp;{{data.low}}</mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
  import img0 from '../assets/images/plain/0.png'
  import img1 from '../assets/images/plain/1.png'
  import img2 from '../assets/images/plain/2.png'
  import img3 from '../assets/images/plain/3.png'
  import img4 from '../assets/images/plain/4.png'
  import img5 from '../assets/images/plain/5.png'
  import img6 from '../assets/images/plain/6.png'
  import img7 from '../assets/images/plain/7.png'
  import img8 from '../assets/images/plain/8.png'
  import img9 from '../assets/images/plain/9.png'
  import img10 from '../assets/images/plain/10.png'
  import img11 from '../assets/images/plain/11.png'
  import img12 from '../assets/images/plain/12.png'
  import img13 from '../assets/images/plain/13.png'
  import img14 from '../assets/images/plain/14.png'
  import img15 from '../assets/images/plain/15.png'
  import img16 from '../assets/images/plain/16.png'
  import img17 from '../assets/images/plain/17.png'
  import img18 from '../assets/images/plain/18.png'
  import img19 from '../assets/images/plain/19.png'
  import img20 from '../assets/images/plain/20.png'
  import img21 from '../assets/images/plain/21.png'
  import img22 from '../assets/images/plain/22.png'
  import img23 from '../assets/images/plain/23.png'
  import img24 from '../assets/images/plain/24.png'
  import img25 from '../assets/images/plain/25.png'
  import img26 from '../assets/images/plain/26.png'
  import img27 from '../assets/images/plain/27.png'
  import img28 from '../assets/images/plain/28.png'
  import img29 from '../assets/images/plain/29.png'
  import img30 from '../assets/images/plain/30.png'
  import img31 from '../assets/images/plain/31.png'
  import img32 from '../assets/images/plain/32.png'
  import img33 from '../assets/images/plain/33.png'
  import img34 from '../assets/images/plain/34.png'
  import img35 from '../assets/images/plain/35.png'
  import img36 from '../assets/images/plain/36.png'
  import img37 from '../assets/images/plain/37.png'
  import img38 from '../assets/images/plain/38.png'
  import img99 from '../assets/images/plain/99.png'
  export default {
    name: "WeekWeather",
    data() {
      return {
        imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33,img34, img35, img36, img37, img38,img99]
      }
    },
    props:{
      weekData:{
        required:true
      }
    }
  }
</script>

<style scoped>
.weekWeather{
  background: -webkit-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.6)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.6)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.6)); /* Firefox 3.6 - 15 */
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.6)); /* 标准的语法 */
  padding-top: 0.35rem;
  padding-bottom: 0.5rem;
  /*border-top: gray 1px solid;
  border-bottom: gray 0.5px solid;*/
  color: #67A7B9;
}
.weekInfo{
  padding-left: 1.5rem;
  height: 1.7rem;
  line-height: 1.3rem;
  font-size: 1.1rem;
}
.iconInfo {
  height: 1.7rem;
}
.Temper{
  text-align: right;
  padding-right: 1.5rem;
  height: 1.7rem;
  line-height: 1.3rem;
  font-size: 1.1rem;
}
  .weekWeatherImg{
    display: block;
    margin: 0 auto;
    width: 1.7rem;
  }
</style>
