<template>
  <div class="myPic">
    <h3>Sun Dial</h3>
    <svg  width="200" height="100" viewbox="0 0 100 45" xmlns="http://www.w3.org/2000/svg">
      <path id="sunPath" d="M10 30 C 30 5, 70 5, 90 30" stroke="rgba(0,0,0,0.5)" fill="transparent" />
      <g id="sunEl" style="transform: translate(10px, 30px);">
        <circle r="5" />
      </g>
      <g class="text-fields">
        <text id="sunrise">rise</text>
        <text id="time">curTime</text>
        <text id="sunset">set</text>
      </g>
    </svg>
  </div>
</template>

<script>
    export default {
      name: "SunDial",
      props:{

      },
      mounted() {
        //sunPath.getTotalLength()
//sunPath.getPointAtLength(1)
        var sun = document.getElementById('sunEl');
        var sunPath = document.getElementById('sunPath');
        var time = document.getElementById('time');
        var sunPathL = sunPath.getTotalLength();
        var sunrise = new Date(2017, 4, 1);
        var curTime = new Date(2017, 4, 1, 2);
        var sunset = new Date(2017, 4, 2);
        var hour = 0,
          direction = 0;
        getPointAtTime(sunrise);
// curTime / (sunset - sunrise)
        function getPointAtTime(curTime) {
          var dif = (curTime - sunrise) / (sunset - sunrise);
          var sunPosOnPath = sunPathL * dif;
          return sunPath.getPointAtLength(sunPosOnPath);
        }

        function formatDate(date) {
          var monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
          ];

          var day = date.getDate();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();

          // return monthNames[monthIndex] + ' ' + day + ', ' + year + '\n' +
          //     date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
          return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        }


        setInterval(function(){
          hour = 1+hour % 23;
          var thisTime = new Date(2017, 4, 1, hour);
          var point = getPointAtTime(thisTime);
          if(point) {
            sun.style='transform: translate(' + point.x + 'px,' + point.y + 'px)';
          }
          time.textContent = formatDate(thisTime);
        }, 1000);
      }
    }
</script>

<style scoped>
  .myPic {
    text-align: center;
    margin: 0;
  }

  h3 {
    font-weight: 100;
    margin: 0;
  }

  g {
    transition: transform 400ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  path {
    stroke-width: 2px;
    stroke-linecap: round;
  }

  circle {
    fill: #dd0;
    stroke: #fff;
    stroke-width: 2px;
  }

  .text-fields {
    transform: translateY(45px);
  }
  .text-fields text {
    text-transform: uppercase;
    font-size: 7px;
  }

  #sunrise, #sunset {
    font-size: 5px;
    fill: #888;
  }

  #time {
    transform: translateX(40px);
  }

  #sunrise {
    transform: translateX(2px);
  }

  #sunset {
    transform: translateX(85px);
  }

</style>
