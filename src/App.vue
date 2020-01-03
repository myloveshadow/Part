<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/swipe/index.css';
import 'vant/lib/swipe-item/index.css';
Vue.use(Swipe).use(SwipeItem);
export default {
    data() {
    return {
            isTabbar:false,
            width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ,
            height: window.innerHeight || document.documentElement.clientHeight,
            guides:[{guideImg:require('@/assets/guide/guide3.png'),guideTextFrist:'紧招职位',guideTextSecond:'成就职场人生'},
                   {guideImg:require('@/assets/guide/guide1.png'),guideTextFrist:'兼职旅行',guideTextSecond:'说走就走'},
                   {guideImg:require('@/assets/guide/guide2.png'),guideTextFrist:'任性小任务',guideTextSecond:'任性小任务'},

            ]
            
    }
  },
  methods:{
     onChange(index){
       console.log(this.isTabbar,index)
       if(index==2){
        this.isTabbar=true;
         this.$router.push('/index');
  
       }else {
         this.isTabbar=false;
       }
     }
  }
    /*
    data(){
        return {
            width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ,   
            guide:{guideImg:[require('@/assets/guide/guide3.png'),require('@/assets/guide/guide1.png'),require('@/assets/guide/guide2.png')],
                   guideTextFrist:['紧招职位','兼职旅行','任性小任务'],
                   guideTextSecond:['成就职场新贵','说走就行','积累大收获']
            },
            isSwipe:0,   //是否滑动 and 切换图片
        }
    },
    methods:{
        onSwipeLeft:function(){
            this.isSwipe++;  //左滑
           if(this.isSwipe<3){
                 this.guide.guideImg[this.isSwipe];
                  this.guide.guideTextFrist[this.isSwipe];
                   this.guide.guideTextSecond[this.isSwipe];
           }else{
              this.$router.push('/index')
           }
        },
        onSwipeRight:function(){  //右滑
        this.isSwipe--;
         if(this.isSwipe==0){
                this.guide.guideImg[this.isSwipe];
                 this.guide.guideTextFrist[this.isSwipe];
                  this.guide.guideTextSecond[this.isSwipe];
            }else{
                this.isSwipe=0;
                return;
            }
           
      //      console.log(2);
        },
        switchImg:function(index){
                this.guide.guideImg[index];
                 this.guide.guideTextFrist[index];
                  this.guide.guideTextSecond[index];
                  console.log(this.guide.guideTextSecond[index])
        }
      /*  touchStart:function(ev){
            ev = ev || event;
            ev.preventDefault();
       //     if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
         //       this.startX = ev.touches[0].clientX; // 记录开始位置
           //     console.log(this.startX)
//            }
            console.log(ev);
        },
        touchMove:function(ev){
            console.log(2)
        },
        touchEnd:function(ev){
            console.log(3)
        }
        */
   // }  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.initShow{
  width: 100%;
  height: 100%;
}
.textGu{
    position: fixed;
    top:100px;
    left:50px;
    width: 50px;
    height: 150px;
}
.textGu p{
    position: absolute;
    letter-spacing: 2px;
    width: 20px;
    height: 100%;
    color:#fff;
    font-size: 20px;
}
.textGu p:first-child{
    left: 0;
}
.textGu p:last-child{
  right: 0;
  top:25px;
}
.round{
    width: 50px;
    height: 20px;
    position: fixed;
    bottom: 60px;
    left: 42%;
}
.round li{
    list-style: none;
    width: 8px;
    height: 8px;
    border: 1px solid #fff;
    border-radius: 50%;
    float: left;
    margin: 0 3px;
}
.bg{
    background: #fff
}
</style>
