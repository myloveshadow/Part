<template>
    <van-row  class="PartMy">
        <van-col span="24">
            <van-col span="24" class="PartMyBg">
                <van-col span="24" class="mybgImg">
                    <van-col span="14" offset="10" class="portrait" >
                        <van-image round width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </van-col>
                    <van-col span="24" class="Mypart">
                         <p class="MyuserName">爱吃包子的咖啡</p>
                        <p class="MyuserTitle">加油,努力 !!!</p>
                    </van-col>
                    <van-col span="18" offset="3">
                        <van-row type="flex" justify="center">
                               <van-col span="8"  v-for="(SecondLogo,index) in SecondLogos" :key="index" class="Secondzx">
                                   <router-link :to="SecondLogo.SecondPartMyLink" class="limian">
                                         <img :src="SecondLogo.SecondPartImg" class="secondPart"/>
                                         <p>{{SecondLogo.SecondPartTitle}}</p>
                                 </router-link>  
                                 <router-view></router-view>
                           </van-col>
                        </van-row>
                     </van-col>
                </van-col>
            </van-col>
        </van-col>
        <!-- 我的简历-->
        <van-col span="24" class="Myresume">
           <van-cell van-cell title="我的简历" is-link to="/my/resume">
                <div slot="icon" class="resume">
                    <img src="@/assets/PartMy/MyResume.png" alt="">
                </div>
               </van-cell> 

        </van-col>
        <!--我的钱包。。。。。。-->
        <van-col span="24">
                 <van-cell v-for="(item,index) in lists" :key="index" :title="item.PartMyText" is-link :to="item.PartMyLink"/>
        </van-col>
        <TabBar/>
    </van-row>
</template>
<script>
import Vue from 'vue';
import TabBar from '@/components/Tabbar.vue';
import { Image } from 'vant';   //image
import { Cell} from 'vant';
import { List } from 'vant';
import 'vant/lib/cell/index.css';
Vue.use(Cell).use(Image).use(List)
import 'vant/lib/image/index.css';
import 'vant/lib/list/index.css';
export default {
    name:'PartMy',
    data(){
        return {
            SecondLogos:[
                {SecondPartImg:require('@/assets/PartMy/signUp.png'),
                 SecondPartTitle:'报名',
                 SecondPartMyLink:'/my/toSignUp'
                },
                {SecondPartImg:require('@/assets/PartMy/myStar.png'),
                 SecondPartTitle:'收藏',
                 SecondPartMyLink:'/my/toMycollection'
                },
                {SecondPartImg:require('@/assets/PartMy/ellipse.png'),
                 SecondPartTitle:'关注',
                 SecondPartMyLink:'/my/onFouces'
                }
            ],
            lists: [
               // {PartMyText:'我的钱包',PartMyLink:'/my/wallet'},  //我的钱包
                {PartMyText:'意见反馈',PartMyLink:'/my/feedback'},   //意见反馈
                {PartMyText:'关于我们',PartMyLink:'/my/aboutus'}, //关于我们
                {PartMyText:'客服咨询',PartMyLink:'/my/consultation'},  //客服咨询
                {PartMyText:'设置',PartMyLink:'/my/setting'}  //设置
            ]
        }
    },
    components:{TabBar},
    methods:{
    }
}
</script>
<style scoped>
.PartMy{
       background: #f5f5f5;
}
.PartMyBg{
    height: 250px;
    background: #f5f5f5;
}
.mybgImg{
    height: 100%;
    background: url(../../assets/PartMy/PartMyBg.png) no-repeat 0px 0px;
    background-size: 100%;
}
.portrait{
    margin-top: 70px;
}
.MyuserName,.MyuserTitle{
    font-size: 14px;
    height: 20px;
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    text-align: center;
    line-height:20px;
}
.Mypart{
    margin-top: 10px;
}
.MyuserTitle{
    font-size: 12px;
}
.Secondzx{
    margin-top: 36px;
}
.Secondzx:last-child img{
    padding-top: 6px;
}
.Secondzx:first-child p{
    margin-top: -4px;
}
.secondPart{
    width: 22px;
    padding: 0 auto;
}
.limian {
    display: block;
    text-decoration: none;
    width: 76px;
    height: 24px;
    color:#666;
}
.limian p{
    position: relative;
    top:-19px;
    left: 30px;
}
.Myresume{
    margin-bottom:10px; 
}
.resume{
        width: 20px;
    height: 20px;
    margin-right: 11px;
}
.resume img{
    width: 100%;
}
.van-cell__title span{
    color:#666;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}
.van-cell--clickable{
  box-sizing: border-box;
  padding-bottom: 14px;
}
</style>