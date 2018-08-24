<template>
  <div class="myBg">
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      天气分享
    </mu-appbar>
    <mu-container style="padding: 0">
      <mu-row>
        <mu-col span="10" offset="1">
          <img :src="shareImg" alt="图片分享" class="shareImg">
        </mu-col>
      </mu-row>

      <div class="shareText">长按图片保存到相册</div>
      <div class="shareText" style="padding-bottom: 2rem">快和伙伴分享吧！</div>

    </mu-container>
  </div>
</template>

<script>
  export default {
    name: "Share",
    data(){
      return{
        shareImg:""
      }
    },
    methods:{
      back(){
        this.$router.back();
      }
    },
    created(){
      this.shareImg = this.$route.params.shareImg ;
    }
  }
</script>

<style scoped>
  .myBg{
    background-color: white;
  }
.shareImg{
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.shareText{
  text-align: center;
  font-size: 1.5rem;
  font-family: STXinwei;
}
</style>
