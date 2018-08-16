<template>
  <div class="weekWeather">
    <mu-container>
      <mu-row gutter v-for="(data,index) in weekData" :key="index">
        <mu-col span="4" class="weekInfo">{{data.week}}</mu-col>
        <mu-col span="4" class="iconInfo">
          <img :src="imgList[data.code_day]" alt="weather" class="weekWeatherImg">
        </mu-col>
        <mu-col span="4" class="Temper">{{data.high}}&nbsp;&nbsp;&nbsp;{{data.low}}</mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
  import img0 from '../assets/images/plain/0.svg'
  import img1 from '../assets/images/plain/1.svg'
  import img2 from '../assets/images/plain/2.svg'
  import img3 from '../assets/images/plain/3.svg'
  import img4 from '../assets/images/plain/4.svg'
  import img5 from '../assets/images/plain/5.svg'
  import img6 from '../assets/images/plain/6.svg'
  import img7 from '../assets/images/plain/7.svg'
  import img8 from '../assets/images/plain/8.svg'
  import img9 from '../assets/images/plain/9.svg'
  import img10 from '../assets/images/plain/10.svg'
  import img11 from '../assets/images/plain/11.svg'
  import img12 from '../assets/images/plain/12.svg'
  import img13 from '../assets/images/plain/13.svg'
  import img14 from '../assets/images/plain/14.svg'
  import img15 from '../assets/images/plain/15.svg'
  import img16 from '../assets/images/plain/16.svg'
  import img17 from '../assets/images/plain/17.svg'
  import img18 from '../assets/images/plain/18.svg'
  import img19 from '../assets/images/plain/19.svg'
  import img20 from '../assets/images/plain/20.svg'
  import img21 from '../assets/images/plain/21.svg'
  import img22 from '../assets/images/plain/22.svg'
  import img23 from '../assets/images/plain/23.svg'
  import img24 from '../assets/images/plain/24.svg'
  import img25 from '../assets/images/plain/25.svg'
  import img26 from '../assets/images/plain/26.svg'
  import img27 from '../assets/images/plain/27.svg'
  import img28 from '../assets/images/plain/28.svg'
  import img29 from '../assets/images/plain/29.svg'
  import img30 from '../assets/images/plain/30.svg'
  import img31 from '../assets/images/plain/31.svg'
  import img32 from '../assets/images/plain/32.svg'
  import img33 from '../assets/images/plain/33.svg'
  import img34 from '../assets/images/plain/34.svg'
  import img35 from '../assets/images/plain/35.svg'
  import img36 from '../assets/images/plain/36.svg'
  import img37 from '../assets/images/plain/37.svg'
  import img38 from '../assets/images/plain/38.svg'
  import img99 from '../assets/images/plain/99.svg'
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
  background-color: rgba(255,255,255,0.9);
  padding-top: 0.35rem;
  border-top: gray 1px solid;
  border-bottom: gray 0.5px solid;
  color: #67A7B9;
}
.weekInfo{
  padding-left: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
.iconInfo {
  height: 1.5rem;
}
.Temper{
  text-align: right;
  padding-right: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
  .weekWeatherImg{
    display: block;
    margin: 0 auto;
    width: 1.4rem;
  }
</style>
