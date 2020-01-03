<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
        <van-col span="24">
             <van-nav-bar  title="我的任务"   left-arrow  @click-left="onClickLeft" :fixed="true"/>
        </van-col>
        <van-col span="24" style="margin-top:1.2rem;background:#f5f5f5">
            <van-col span="24">
                   <van-tabs v-model="active" class="bor">
  <van-tab title="全部" to="/index/task/mytask/all" class="de">
    <van-cell title="【微信】分享到朋友圈" label="  2019-09-36">
        <div class="taskStatus">审核中</div>
    </van-cell>
    <van-cell title="【微信】分享到朋友圈" label="  2019-09-36">
        <div class="taskStatus">审核中</div>
    </van-cell>
  </van-tab>
  <van-tab title="待审核" to="/index/task/mytask/wait">
        <van-cell title="【微信】分享到朋友圈" label="  2019-09-36">
            <div class="taskStatus">审核中</div>
       </van-cell>
  </van-tab>
  <van-tab title="不及格" to="/index/task/mytask/pass" >
    <van-cell title="【微信】分享到朋友圈" label="  2019-09-36">
        <div class="taskStatus">审核中</div>
    </van-cell>
  </van-tab>
  <van-tab title="已通过" to="/index/task/mytask/through" >
  

        <van-cell title="【微信】分享到朋友圈" label="  2019-09-36">
        <div class="taskStatus">审核中</div>
    </van-cell>
  </van-tab>
</van-tabs>
            </van-col>
        </van-col>
        </van-col>
    </van-row>    
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import 'vant/lib/tab/index.css';
import 'vant/lib/tabs/index.css';
Vue.use(Tab).use(Tabs);
export default {
    data(){
        return {
            height:window.innerHeight || document.documentElement.clientHeight,
            active: 0
        }
    },
    methods:{
        onClickLeft(){
            history.back(1);
        }
    },
    watch:{
        '$route'(to,from){
            console.log(to);
        }
    }
}
</script>
<style scoped>
.van-hairline--bottom{
    background: #36d9d6;
}
.van-nav-bar__title{
    color:#fff;
}
.van-nav-bar .van-icon,.van-nav-bar__text{
    color:#fff;
    font-size: 12px;
}
 .van-tabs__nav--line >>> .van-tabs__line{
    background: #36d9d6;
}
.taskStatus{
    width: 74px;
    height: 40px;
    background: #36d9d6;
    text-align: center;
    line-height: 40px;
    color:#fff;
    position: absolute;
    right: 0;
    border-radius: 2px;
}
.van-cell__label{
    text-indent: 6px;
}
.bor /deep/ .van-tabs__wrap{
    border-bottom: 1px solid #f5f5f5;
}
.bor /deep/ .van-tabs__line{
    background-color: #36d9d6;
}
</style>