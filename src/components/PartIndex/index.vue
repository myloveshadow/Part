<template>
    <van-row class="bgColor">
  <van-col span="24">
      <van-nav-bar :fixed="true"  left-text="上海" @click-left="onClickLeft">
          <div slot="right">
            <div class="van-search">
                <i></i>
                <input type="text" name="" id="" placeholder="请输入您要输入的内容">
            </div>
          </div>
            </van-nav-bar>
    </van-col>
    <van-col span="24" style="">
        <van-swipe :autoplay="3000" indicator-color="#36d9d6">
             <van-swipe-item v-for="(image, index) in images" :key="index">
                       <img :src="image"  class="swipeImg" />
             </van-swipe-item>
        </van-swipe>
    </van-col>
    <!--frist-->
         <van-col span="24">
             <van-row type="flex" justify="space-around"  class="bgFlex">
                  <van-col span="5" v-for="(partText,index) in partTexts" :key="index">
                      <router-link :to="partText.PartTextLink">
                      <img :src="partText.PartImage" alt="" class="as">
                      <p class="fristText">{{partText.PartText}}</p>
                      </router-link>
                   </van-col>
             </van-row>
         </van-col>
         <!--second-->
          <van-col span="24">
             <van-row type="flex" justify="space-between"  class="bgSecond">
                
                  <van-col span="7" v-for="(scd,index) in  PartseCond" :key="index">
                       <router-link :to="scd.routerLinkTo">
                        <p>{{scd.seCondTextTitle}}</p>
                          <p>{{scd.seCondTextwen}}</p>
                            <p>{{scd.seCondTextfotter}}</p>
                            <img :src="scd.seCondImage" alt="" class="as">
                        </router-link>
                   </van-col>
             </van-row>
         </van-col>
         <!--thirdly-->
         <van-col span="24" class="thirdly">
             <router-link to="/index/hurry">
                     <van-col span="12"> <img src="@/assets/PartIndex/jobs.png" alt="" srcset=""> </van-col>
                     <van-col span="12">
                         <p>兼职急招专场 </p>
                         <p>期待您火速报名参加</p>
                    </van-col>
            </router-link>
         </van-col>
         <!--今日推荐-->
         <van-col span="24">
         <van-col span="24" class="todayTitle">
             <van-col span="23" offset="1" ><p class="fule">今日推荐</p></van-col>
         </van-col>
         <van-col span="24" class="todayTitle  ">
             <van-list  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
                   <van-cell v-for="item in list" :key="item" to="/details">
                        <div slot="title">
                                <van-col  span="3" offset="1" class="listToday">
                                    <van-image round  width="40px" height="40px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                                </van-col>
                                <van-col span="14" offset="1" class="listText">
                                    <p>淘宝图书管理员</p>
                                    <p>¥150.00<span>/天</span></p>
                                </van-col>
                                <van-col span="4" offset="1" class="listTextRight">
                                    <p>认证</p>
                                    <p>宝山区</p>
                                </van-col>
                            </div> 
                    </van-cell>
                                     
             </van-list>
             <!--
             <van-col  span="3" offset="1" class="listToday">
                 <van-image round  width="40px" height="40px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
             </van-col>
             <van-col span="15" class="listText">
                 <p>淘宝图书管理员</p>
                 <p>¥150.00<span>/天</span></p>
             </van-col>
             <van-col span="4" offset="1" class="listTextRight">
                 <p>认证</p>
                 <p>宝山区</p>
             </van-col>
             -->
         </van-col>
         <router-view></router-view>
        </van-col>
        <TarBar/>
    </van-row>    
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Image } from 'vant';
import { CellGroup } from 'vant';
import TarBar from "@/components/Tabbar"; //tabbar
import 'vant/lib/swipe/index.css';
import 'vant/lib/swipe-item/index.css';
import 'vant/lib/image/index.css';
import 'vant/lib/cell-group/index.css';
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Image).use(CellGroup);
export default {
    data(){
        return {
            list: [],
            loading: false,
        finished: false,
            images:[require('@/assets/PartIndex/swipeone.png'),require('@/assets/PartIndex/swipeone.png'),require('@/assets/PartIndex/swipeone.png')],
            partTexts:[{PartText:'热门兼职',PartTextLink:'/index/hotpart',PartImage:require('@/assets/PartIndex/hotPart.png')},
                       {PartText:'最新兼职',PartTextLink:'/index/newpart',PartImage:require('@/assets/PartIndex/newPart.png')},
                       {PartText:'附近兼职',PartTextLink:'/index/redress',PartImage:require('@/assets/PartIndex/redressPart.png')},
                       {PartText:'周末兼职',PartTextLink:'/index/weekpart',PartImage: require('@/assets/PartIndex/weekPart.png')}],
            PartseCond:[
                {seCondImage:require('@/assets/PartIndex/task.png'),seCondTextTitle:'门任务',seCondTextwen:'在家葛优瘫',seCondTextfotter:'照样能挣钱',routerLinkTo:'/index/task'},
                {seCondImage:require('@/assets/PartIndex/internship.png'),seCondTextTitle:'找实习',seCondTextwen:'好单位大企业',seCondTextfotter:'',routerLinkTo:'/index/internship'},
                {seCondImage:require('@/assets/PartIndex/volunteers.png'),seCondTextTitle:'兼职旅行',seCondTextwen:'体验免费的旅行',seCondTextfotter:'收获珍藏的回忆',routerLinkTo:'/index/travel'}
            ]
        }
    },
    components:{TarBar},
    methods:{
        onClickLeft(){
            this.$router.push('/index/map');
        },
        onSearch(){},
        onCancel(){},
        onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.bgColor{
    background: #f5f5f5;
}
.van-nav-bar{
    background-color: #36d9d6;
}
/*重做搜索样式*/
div  .van-search{
    position: relative;
}
div  .van-search i{
    display: block;
    width: 20px;
    height: 20px;
    background: url(../../assets/PartIndex/search.png);
    background-size: 100%;
    position: absolute;
    top:15px;
    left:23px;
}
div  .van-search input{
    display: block;
     width: 220px;
    height: 25px;
    margin-right: 30px;
    border: none;
    outline: none;
    border:2px solid #fff;
      border-radius: 24px;
      background: #36d9d6;
      color: #fff;
      text-indent: 36px;
      font-size: 14px;
      line-height: 14px;
      font-family: Arial, Helvetica, sans-serif;
}
input::-webkit-input-placeholder {
        color: #fff;
        font-size: 12px;
        line-height: 100%
      }
      input::-moz-input-placeholder {
        color: #fff;
      }
      input::-ms-input-placeholder {
        color: #fff;
      }
img.swipeImg{
   width: 100%;
}
.van-swipe{
    margin-top: 1rem;
}
.bgFlex{
    background: #fff;
}
.as{
    display: block;
    width: 70%;
    margin: 0 auto;
}
/**热门兼职 */
.fristText{
    color:#666;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding: 4px 0 4px 0;
    box-sizing: border-box; 
}
/**第二层 */
.bgSecond{
    margin-top:5px;
}
.bgSecond div{
    background: #fff;
    width:32.166667%;
}
.bgSecond div p:first-child{
    font-size: 16px;
    text-align: center;
    padding: 4px 0 4px 0;
}
.bgSecond div:first-child p:first-child{
    color:#36d9d6;
}
.bgSecond div:nth-child(2) p:first-child{
    color:#cc3333;
}
.bgSecond div:nth-child(3) p:first-child{
    color:#e6d065;
}
.bgSecond div p:nth-child(2){
    font-size: 12px;
    text-align: left;
    padding: 2px 0 2px 12px;
    box-sizing: border-box;
    color: #666;
}
.bgSecond div p:nth-child(3){
    font-size: 12px;
    text-align: right;
    padding: 2px 12px 2px 0px;
    box-sizing: border-box;
    color: #666;
}
.bgSecond div:nth-child(2) p:nth-child(2){
    text-align: center;
    padding-left: 0px;
    padding-top: 12px;
}
.bgSecond div:nth-child(3) p:nth-child(2){
    padding-left: 4px;
}
.bgSecond div:nth-child(3) p:nth-child(3){
    padding-right: 4px;
}
.bgSecond div img{
    display: block;
    width: 40%;
    margin: 0 auto;
}
.bgSecond div img{
    margin-top: 5px;
}
.bgSecond div:nth-child(2) img{
    margin-top: 0.4rem;
}
.thirdly{
    margin-top: 5px;
    background: #fff;
    margin-bottom:5px;
}
.thirdly img{
    width: 100%;
}
.thirdly div:last-child{
    margin-top:.5rem ;
}
.thirdly p{
    text-align: center;
    line-height: 100%;
    font-size: 12px;
    color:#666;
}
.todayTitle{
    background: #fff;
    margin-bottom:5px;
}
.todayTitle p.fule{
    height: 30px;
    color:#666;
    line-height: 30px;
    font-size: 14px;
}
.listToday{
    margin-top: 6px;
}
.listText,.listTextRight{
     margin-top: 6px;
}
.listText>p , .listTextRight>p{
    height: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.listText>p:first-child{
    font-size: 16px;
     color:#333;
}
.listText>p:last-child{
    color:#36d9d6;
}
.listText>p:last-child>span{
    color: #333;
}
.listTextRight>p{
    vertical-align: middle;
    text-align: center;
}
.listTextRight>p:first-child{
    width: 34px;
    height: 20px;
    color:#fff39f;
    margin-top: 6px;
    font-size: 12px;
    background:#ffdd00;
    margin-left: 10px;
}
.listTextRight>p:last-child{
    width: 54px;
    height: 20px;
    color:#999;
    letter-spacing: 1px;
}
.van-list{
    margin-bottom: 1.2rem;
}
</style>