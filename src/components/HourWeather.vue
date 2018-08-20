<template>
  <div>
    <mu-container>
      <mu-row>
        <mu-col span="6" class="weekInfo">{{week}} <small>今天</small></mu-col>
        <mu-col span="6" class="Temper">{{high}}&nbsp;&nbsp;&nbsp;{{low}}</mu-col>
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
      name: "HourWeather",
      data() {
        return {
          imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33,img34, img35, img36, img37, img38,img99]
        }
      },
      props:{
        week:{
          required:true
        },
        high:{
          required:true
        },
        low:{
          required:true
        }
      }
    }
</script>

<style scoped>
  .weekInfo{
    padding-left: 1rem;
    height: 1.4rem;
    line-height: 1.3rem;
    color: white;
    font-size: 1.1rem;
  }
  .Temper{
    text-align: right;
    padding-right: 1rem;
    height: 1.7rem;
    line-height: 1.7rem;
    color: white;
    font-size: 1.1rem;
  }
</style>
