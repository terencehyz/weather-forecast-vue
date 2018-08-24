<template>
  <div>
    <mu-appbar style="width: 100%;" color="white" textColor="black">
      <mu-button icon slot="left" @click="back()">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button>
      城市搜索
    </mu-appbar>
    <xc-city @get-data="getData"></xc-city>
    <div class="divwrap" v-if="show">
      <v-distpicker type="mobile" hide-area @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name: "RainCondition",
    data() {
      return {
        show:true,
      }
    },
    methods:{
      getData(a){
        var c;
        if (localStorage.getItem('cityList') == null || localStorage.getItem('cityList') == undefined) {
          c = new Array();
        }
        else{
          c = JSON.parse(localStorage.getItem('cityList'));
        }
        var cc = a;
        if (cc.substring(cc.length-2)=="城区") {
          cc = cc.substring(0,cc.length-2)+"市";
        }
        c.push(cc);
        localStorage.setItem('cityList',JSON.stringify(c));
        this.$router.back();
      },
      back(){
        this.$router.back();
      },
      onChangeProvince(a){
        console.log(a)
      },
      onChangeCity(a){
        console.log(a)
        this.show=true;
        var c;
        if (localStorage.getItem('cityList') == null || localStorage.getItem('cityList') == undefined) {
          c = new Array();
        }
        else{
          c = JSON.parse(localStorage.getItem('cityList'));
        }
        var cc = a.value;
        if (cc.substring(cc.length-2)=="城区") {
          cc = cc.substring(0,cc.length-2)+"市";
        }
        c.push(cc);
        localStorage.setItem('cityList',JSON.stringify(c));
        this.$router.back();
      },
      onChangeArea(a){
        console.log(a)
      },
    },
    components: {
      VDistpicker
    }
  }
</script>

<style scoped>

</style>
