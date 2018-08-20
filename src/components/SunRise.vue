<template>

    <div class="sun" id="sun">
        <canvas id="canvas">A Drawing of something</canvas>
    </div>

</template>

<script>
    class Draw {
        constructor() {
            this.time = 0
        }

        canvas() {
            let aut = 2
            let t = this.time
            let sun = document.getElementById("sun")
            let canvas = document.getElementById('canvas');

            let w = sun.clientWidth * aut
            let h = 100 * aut
            canvas.width = w;
            canvas.height = h;

            let context = canvas.getContext('2d');

            /**
             * 轨迹
             */
            context.lineCap = 'round';
            context.strokeStyle = '#ff7411';
            context.lineWidth = 2 * aut;
            context.moveTo(0, h);
            context.quadraticCurveTo(w / 2, -h / 2, w, h)
            context.stroke();

            /**
             * 端点
             */
            // context.beginPath();
            // context.arc(0 + 3, h - 2, 2, 0, 2 * Math.PI);
            // context.fillStyle = '#ff1311'
            // context.fill()
            // context.stroke()
            //
            // context.beginPath();
            // context.arc(w - 3, h - 2, 2, 0, 2 * Math.PI);
            // context.fillStyle = '#ff1311'
            // context.fill()
            // context.stroke()

            /**
             * 画太阳
             */
            let sun_x
            let sun_y
            sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
            sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h

            context.beginPath();
            context.arc(sun_x, sun_y, 15 * aut, 0, 2 * Math.PI * aut);
            context.strokeStyle = '#ffffff';
            context.fillStyle = '#fff40c'
            context.fill()
            context.lineWidth = 2 * aut;
            context.stroke()
            //分割线
            context.beginPath();
            context.strokeStyle = '#ffcc89';
            context.lineWidth = 1 * aut;
            context.moveTo(sun_x, sun_y + 17 * aut);
            context.lineTo(sun_x, h - 10 * aut)
            context.stroke()

            /**
             * 时间
             */
            //context.beginPath();
            context.fillStyle = '#ff7411';
            //context.lineWidth = 10;
            context.font = 'bold 20px sans-serif'
            context.fillText(this.day_begin, 30, h - 3);
            context.fillText(this.day_end, w - 130, h - 3);

            /**
             * 画虚线
             */
            while (t < 1) {
                t += 0.05;
                sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                context.beginPath();
                context.strokeStyle = '#ffffff';
                context.lineWidth = 3;
                context.moveTo(sun_x, sun_y);
                t += 0.05
                sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                context.lineTo(sun_x, sun_y)
                context.stroke()
            }
        }

        setTime(t) {
            this.time = t
        }

        setBeginEnd(b, e) {
            this.day_begin = b
            this.day_end = e
        }
    }

    const draw = new Draw()

    export default {
        name: "SunRise",
        data() {
            return {
                wind_direction: '',
                wind_scale: '',
                humidity: '',
                feels_like: '',
                pressure: '',
                day_begin: '日出 06:00',
                day_end: '日落 18:00',
                draw
            }
        },
        methods: {
            canvas(t) {
                let sun = document.getElementById("sun")
                let canvas = document.getElementById('canvas');

                let w = sun.clientWidth
                let h = 100
                canvas.width = w;
                canvas.height = h;

                let context = canvas.getContext('2d');

                /**
                 * 轨迹
                 */
                context.strokeStyle = '#ff7411';
                context.lineWidth = 1;
                context.moveTo(0, h);
                context.quadraticCurveTo(w / 2, -h / 2, w, h)
                context.stroke();

                /**
                 * 端点
                 */
                context.beginPath();
                context.arc(0 + 3, h - 2, 2, 0, 2 * Math.PI);
                context.fillStyle = '#ff1311'
                context.fill()
                context.stroke()

                context.beginPath();
                context.arc(w - 3, h - 2, 2, 0, 2 * Math.PI);
                context.fillStyle = '#ff1311'
                context.fill()
                context.stroke()

                /**
                 * 画太阳
                 */
                let sun_x
                let sun_y
                sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h

                context.beginPath();
                context.arc(sun_x, sun_y, 15, 0, 2 * Math.PI);
                context.strokeStyle = '#ffffff';
                context.fillStyle = '#fff40c'
                context.fill()
                context.lineWidth = 2;
                context.stroke()
                //分割线
                context.beginPath();
                context.strokeStyle = '#ffcc89';
                context.lineWidth = 1;
                context.moveTo(sun_x, sun_y + 17);
                context.lineTo(sun_x, h - 10)
                context.stroke()

                /**
                 * 时间
                 */
                context.beginPath();
                context.fillStyle = '#ff7411';
                context.lineWidth = 1;
                context.font = '10px'
                context.fillText(this.day_begin, 20, h - 3);

                context.beginPath();
                context.fillStyle = '#ff7411';
                context.lineWidth = 1;
                context.font = '10px'
                context.fillText(this.day_end, w - 70, h - 3);

                /**
                 * 画虚线
                 */
                while (t < 1) {
                    t += 0.05;
                    sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                    sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                    context.beginPath();
                    context.strokeStyle = '#ffffff';
                    context.lineWidth = 3;
                    context.moveTo(sun_x, sun_y);
                    t += 0.05
                    sun_x = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * w / 2 + t * t * w
                    sun_y = (1 - t) * (1 - t) * h + 2 * t * (1 - t) * (-h / 2) + t * t * h
                    context.lineTo(sun_x, sun_y)
                    context.stroke()
                }
            },
            showTop() {
                /**
                 * 设置日出日落时间
                 */
                draw.setBeginEnd(this.day_begin, this.day_end)

                let hour = new Date().getHours();
                if (hour >= 6 && hour <= 18) {
                    let t = (hour - 6) / 12
                    draw.setTime(t)
                    //this.canvas(t)
                    draw.canvas()
                } else {
                    draw.setTime(1)
                    draw.canvas()
                }
            }
        },
        async mounted() {
            this.showTop()
        }
    }

    // window.onresize = function () {
    //     window.location.reload()
    // }

    window.onresize = () => {
        const str = location.href
        if (str.charCodeAt(str.length - 1) === 47) {
            draw.canvas()
        }
    }

</script>

<style scoped>
    div {
        color: #656565;
    }

    .sun-body {
        height: 200px;
        /*border-bottom: 10px solid #eeeeee;*/
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .sun-top {
        width: 100%;
        height: 120px;
        padding-top: 15px;
        padding-left: 5%;
    }

    .sun-bottom {
        width: 100%;
        height: 80px;
        padding-top: 15px;
    }

    .sun-msg {
        text-align: center;
        border-right: 1px solid #e6e6e6;
    }

    .sun-msg-last {
        text-align: center;
    }

    .sun {
        width: 100%;
        height: 100px;
      background: -webkit-linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.9)); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.9)); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.9)); /* Firefox 3.6 - 15 */
      background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.9)); /* 标准的语法 */
    }

    .my-card {
        margin-top: 40px;
        /*margin-bottom:60px;*/
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
    }

    #canvas {
        height: 100px;
    }
</style>
