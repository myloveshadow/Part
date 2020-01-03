<template>
    <van-row>
        <van-col span="24" :style="{background:'#f5f5f5'}">
            <van-col span="24">
                  <van-nav-bar title="个人资料"   left-arrow  @click-left="onClickLeft" :fixed="true" />
            </van-col>
            <van-col span="24" class="bgderails">
                <img src="../../assets/PartMy/PartMyBg.png" class="bgimg" alt="">
                    <van-col span="24" class="ziImg">
                        <van-image round  width="60px"  height="60px"  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </van-col>
                    <van-col span="24">
                        <p class="friendName">爱吃肉的小阿菲</p>
                    </van-col>
                    <van-col span="24">
                        <p class="friendBiao">肉乃济世良药！</p>
                    </van-col>
            </van-col>
            <van-col span="24" class="tabfriend" v-for="(i,index) in 5" :key="index">
                <van-col span="9" offset="1"><p class="labelname">真实姓名</p></van-col>
                <van-col span="12"><p class="name">杨宇飞</p></van-col>
            </van-col>
            <van-col span="24" class="fl">
                <van-col span="10" offset="1"><p class="chat">聊一聊</p></van-col>
                <van-col span="10" offset="2"><p class="dele">删除好友</p></van-col>
            </van-col>
        </van-col> 
    </van-row>    
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/button/index.css';
Vue.use(Button);
export default {
    data(){
        return {
            height:window.innerHeight || document.documentElement.clientHeight
        }
    },
    methods:{
        onClickLeft(){}
    }
}
</script>
<style scoped>
.van-hairline--bottom{    /*穿透*/
      background: #36d9d6;  
    }
.van-hairline--bottom{
    background: #36d9d6;
}
.van-nav-bar__title{
    color:#fff;
}
.van-nav-bar .van-icon{
    color: #fff;
}
.bgderails{
    height: 200px;
    margin-bottom: 30px;
}
.bgimg{
    width: 100%;
    height: 70%;
}
.ziImg{
    margin-top: -44px;
    margin-left: 41%;
}
.friendName{
    width: 100%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color:#333;
    font-size: 16px;
    margin:4px 0;
}
.friendBiao{
    width: 100%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color:#999;
    font-size: 12px;
}
.tabfriend{
    height: 50px;
    background: #fff;
    border: 1px solid #f5f5f5;
}
.labelname,.name{
    height: 50px;
    line-height: 50px;
    text-align: left;
    color:#666;
    font-size: 14px;
}
.name{
    color: #333;
    font-size: 16px;
}
.fl{
    position: fixed;
    height: 40px;
    bottom: 8px;
}
.chat,.dele{
    width: 150px;
    height: 40px;
    background: #36d9d6;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    color:#fff;
}
.dele{
    width: 150px;
    background: #36d992;
}
</style>