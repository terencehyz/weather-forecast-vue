<template>
  <section>
    <img :src="imgList[icon]" class="weather__icon" :alt="description">
  </section>
</template>

<script>
  import img0 from '../assets/images/animate/0.svg'
  import img1 from '../assets/images/animate/1.svg'
  import img2 from '../assets/images/animate/2.svg'
  import img3 from '../assets/images/animate/3.svg'
  import img4 from '../assets/images/animate/4.svg'
  import img5 from '../assets/images/animate/5.svg'
  import img6 from '../assets/images/animate/6.svg'
  import img7 from '../assets/images/animate/7.svg'
  import img8 from '../assets/images/animate/8.svg'
  import img9 from '../assets/images/animate/9.svg'
  import img10 from '../assets/images/animate/10.svg'
  import img11 from '../assets/images/animate/11.svg'
  import img12 from '../assets/images/animate/12.svg'
  import img13 from '../assets/images/animate/13.svg'
  import img14 from '../assets/images/animate/14.svg'
  import img15 from '../assets/images/animate/15.svg'
  import img16 from '../assets/images/animate/16.svg'
  import img17 from '../assets/images/animate/17.svg'
  import img18 from '../assets/images/animate/18.svg'
  import img19 from '../assets/images/animate/19.svg'
  import img20 from '../assets/images/animate/20.svg'
  import img21 from '../assets/images/animate/21.svg'
  import img22 from '../assets/images/animate/22.svg'
  import img23 from '../assets/images/animate/23.svg'
  import img24 from '../assets/images/animate/24.svg'
  import img25 from '../assets/images/animate/25.svg'
  import img26 from '../assets/images/animate/26.svg'
  import img27 from '../assets/images/animate/27.svg'
  import img28 from '../assets/images/animate/28.svg'
  import img29 from '../assets/images/animate/29.svg'
  import img30 from '../assets/images/animate/30.svg'
  import img31 from '../assets/images/animate/31.svg'
  import img32 from '../assets/images/animate/32.svg'
  import img33 from '../assets/images/animate/33.svg'
  import img34 from '../assets/images/animate/34.svg'
  import img35 from '../assets/images/animate/35.svg'
  import img36 from '../assets/images/animate/36.svg'
  import img37 from '../assets/images/animate/37.svg'
  import img38 from '../assets/images/animate/38.svg'
  import img99 from '../assets/images/animate/99.svg'

  export default {
    name: "IconInfo",
    data() {
      return {
        imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33,img34, img35, img36, img37, img38,img99]
      }
    },
    props: {
      description: {
        required: true
      },
      icon: {
        required: true
      }
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weather__icon {
    width: 12em;
    margin-bottom: 5em;
    fill: rgba(255,255,255,0.8);
    color: rgba(255,255,255,0.8);
  }
  svg path {
    fill: rgba(255,255,255,0.8);
  }

</style>
