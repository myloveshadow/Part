<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
        <van-col span="24">

            <van-nav-bar title="已报名兼职"    left-arrow  @click-left="onClickLeft" :fixed="true" />

        </van-col>
        <van-col span="24" style="margin-top: 1.3rem;">
            <router-link to="/index" v-for="(partTimeJob,index) in partTimeJobs" :key="index">
            <van-col span="24" class="PartTop">
                <van-col offset="1" span="4" class="yan">
                    <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" class="van-image__img">
                </van-col>
                <van-col span="13" class="yan" >
                    <p class="companyName">上海昊泰劳务服务有限公司</p>
                    <p class="positionName">报名时间：{{partTimeJob.partTimeJobTitle}}</p>
                    <p class="signingTime">报名时间：2019.11.25  14:28</p>
                </van-col>
                <van-col offset="1" span="4" class="yan">
                        <p class="isSuccess">{{partTimeJob.partTimeJobValue}}</p>
                </van-col>
            </van-col>  
            </router-link>         
             <router-view></router-view>
        </van-col>
        </van-col>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { NavBar} from 'vant';
import 'vant/lib/nav-bar/index.css';
Vue.use(NavBar);
export default {
    data(){
        return {
            height:window.innerHeight || document.documentElement.clientHeight,
            partTimeJobs:[{partTimeJobTitle:'图书管理员',partTimeJobValue:'投递成功',},
                            {partTimeJobTitle:'图书管理员',partTimeJobValue:'投递成功'},
                            {partTimeJobTitle:'图书管理员',partTimeJobValue:'已下架'}
            ]
        }
    },
    methods:{
        onClickLeft(){
            history.back(1);
        }
    }
}
</script>
<style scoped>
.van-hairline--bottom{
    background: #36d9d6;
}
.PartTop{
    background: #fff;
    border-bottom: 1px solid #999; 
    margin-bottom: 4px;
}
a:last-child .PartTop{
    border: none;
}
.yan{
    height: 55px;
}
.van-nav-bar__title{
    color:#fff;
}
.van-nav-bar .van-icon{
    color:#fff;
}
.van-image__img{
    width: 44px;
    height: 44px;
    padding-top: 4px;
}
.companyName{
    color:#333;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-bottom: 2px;
}
.positionName{
    color:#4d4d4d;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 2px;
}
.signingTime{
    color:#999;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
}
.isSuccess{
    width: 100%;
    height: 80%;
    margin-top: 8%;
    line-height: 46px;
    letter-spacing: 1px;
    text-align: center;
    color:#fff;
    background: #36d9d6;
}
</style>