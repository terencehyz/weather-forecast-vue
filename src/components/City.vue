<template>
  <div class="night">
    /*栅栏*/
  	<mu-container style="padding: 0">
      /*一行*/
  		<mu-row class="d2">
        /*左半边，占总宽3/4*/
    		<mu-col span="9">
    			<div class="d3">
					多云转晴
    			</div>
    			<div class="d4">
					北京
    			</div>
    		</mu-col>
         /*右半边，占总宽1/4*/
    		<mu-col span="3">
    			<div class="d5">
					32
    			</div>
    		</mu-col>
  		</mu-row>

  		<mu-row class="d2">
    		<mu-col span="9">
    			<div class="d3">
					多云转晴
    			</div>
    			<div class="d4">
					武汉
    			</div>
    		</mu-col>
    		<mu-col span="3">
    			<div class="d5">
					28
    			</div>
    		</mu-col>
  		</mu-row>
	</mu-container>
   /*小加号*/
	<div>
		<img src="../assets/city/add_night.png" class="d6">
	</div>
  </div>
</template>

<script>
  export default {
    name: "CityComponent",
    props:['info'],
      data() {
        return{
        }
      }
  }
</script>

<style scoped>
	
	.day{
		background-color:white;
		border:0px;
	}
	.night{
		background-color:#1C2626;
		border:0px;
	}
	.d2{
		background-image:url("../assets/city/成都2.jpg");
		background-size:100% auto;
		background-repeat: no-repeat;
	}
	.d3{
		color: white;
		font-size: 0.9rem;
		padding-top: 2.5rem;
		padding-left: 0.5rem; 
	}
	.d4{
		color:white;
		font-size: 2.2rem;
		padding-left: 0.7rem;
		margin-top: -0.5rem;
	}
	.d5{
		color:white;
		font-size:4.4rem;
		margin-top: 0.87rem;
		padding-right: 0.5rem;
		float:right;
	}
	.d6{
		margin-top: 0.5rem;
		margin-left: 21.1rem;
		width: 30px;
		height:30px;
	}
</style>
