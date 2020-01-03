<template>
    <van-row >
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
        <van-col span="24">
            <van-nav-bar  title="门任务"   left-arrow  @click-left="onClickLeft" :fixed="true"/>
        </van-col>
        <van-col span="24" v-if="isSubmit">
        <van-col span="24" class="taskimg">
            <van-image  height="200" :src="require('@/assets/PartIndex/taskstateimg.png')"/>
        </van-col>
        <!--价格及剩余量-->
        <van-col span="24" class="bgmoney">
            <van-col span="3" offset="1">
                <i class="taskMoney"></i>
            </van-col>
            <van-col span="5"><p class="stateMoney">¥0.8</p></van-col>
            <van-col span="5" offset="9"><p class="tasktext">剩余量:&nbsp;147</p></van-col>
        </van-col>
        <!--分类及审核时间-->
        <van-col span="24" class="tskbg">
            <van-col span="2" offset="3">
                <i class="stateTab"></i>
            </van-col>
            <van-col span="7">
                <p class="qi">其它</p>
            </van-col>
            <van-col span="12" class="no">
                <i class="taskTime"></i><p class="statetxt">24小时审核</p>
            </van-col>
            <van-col span="2" offset="3">
                <i class="taskMap"></i>
            </van-col>
            <van-col span="7"><p class="qi">全国</p></van-col>
            <van-col span="12" class="no">
                <i class="week"></i><p class="statetxt">2019-12-12</p>
            </van-col>
        </van-col>
        <!--任务步骤-->
        <van-col span="24">
              <van-col span="24" class="bgmoney">
            <van-col span="3" offset="1">
                <i class="taskMoneywe"></i>
            </van-col>
            <van-col span="10"><p class="stateMoneywe">任务步骤</p></van-col>
        </van-col>
        </van-col>
        <!--步骤详情-->
        <van-col span="24" class="budetails">
            <van-col span="23" offset="1">
            <p class="one ya">1.扫海报二维码添加小秘书</p>
            <van-image width="80"  height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" class="hai"/>
            <van-col span="20" class="nb">
                <p class="one">2.转发海报到朋友圈，附上文字：</p>
                <p class="one"> 转发海报并邀请好友加米星小秘书，赢限量版TomFord口红！</p>
                <p class="one">例子如下图，发朋友圈截图给小秘书并截图提交审核</p>
                 <van-image width="80"  height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" class="hai"/>
            </van-col>
            </van-col>
        </van-col>
        <van-col span="24" class="share">
            <van-col span="21"><p @click="submitTask"> 提交任务</p></van-col>
            <van-col span="3"><p><i></i></p></van-col>
        </van-col>
        </van-col>
        <!--任务提交-->
        <van-col span="24" v-else>
            <van-col span="24" class="subText">
                <van-col span="20" offset="1">
                <p>截图内容：</p>
                <p>提交分享后截图</p>
                </van-col>
            </van-col>
            <van-col span="24" class="upload">
                <van-uploader v-model="fileList"  multiple  :max-count="2" class="chua"/>
                <p>（上传截图，最多支持三张）</p>
            </van-col>
            <van-col span="22" offset="1">
                <van-button type="primary" size="large" color="#36d9d6">提交审核</van-button>
            </van-col>
        </van-col>
        </van-col>
       
    </van-row>
</template>
<script>
import Vue from 'vue';
import { Image , Uploader,Button} from 'vant';
import 'vant/lib/image/index.css'
import 'vant/lib/uploader/index.css'
import 'vant/lib/button/index.css'
Vue.use(Image).use(Uploader).use(Button);
export default {
    data(){
        return {
            height: window.innerHeight || document.documentElement.clientHeight,
            isSubmit:true,
             fileList: []
        }
    },
    methods:{
        onClickLeft(){
            history.go(-1);
        },
        submitTask(){
            this.isSubmit=false;
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
.taskimg{
    margin-top: 1.2rem;
}
.taskMoney{
    display: block;
    width: 40px;
    height: 40px;
    background: url(../../../assets/PartIndex/taskdetails.png) no-repeat 11px  6px;
    background-size: 400%;
}
.bgmoney{
    background-color: #fefefe;
    border-bottom: 1px solid  #f5f5f5;
}
.tasktext{
    text-align: right;
    width: 100%;
    height: 100%;
    line-height: 40px;
    color:#666;
}
.stateMoney{
    width: 100%;
    text-align:left;
    height: 40px;
    line-height: 40px;
    color:#36d9d6;
    font-size: 14px;
}
.tskbg{
    background: #fff;
    margin-bottom: 4px;
}
.stateTab,.taskTime,.taskMap,.week{
    display: block;
    width: 30px;
    height: 30px;
}
.stateTab{
     background: url(../../../assets/PartIndex/taskdetails.png) no-repeat -44px  -6px;
     background-size: 750%;
}
.taskTime{
     background: url(../../../assets/PartIndex/taskdetails.png) no-repeat -105px   -7px;
      background-size: 750%;
}
.taskMap{
     background: url(../../../assets/PartIndex/taskdetails.png) no-repeat -78px   -4px;
      background-size: 770%;
}
.week{
     background: url(../../../assets/PartIndex/taskdetails.png) no-repeat -142px  -5px;
      background-size: 750%;
}
.no{
    position: relative;
}
.statetxt{
    position: absolute;
    top:5px;
    left:36px;
    color:#666;
    font-size: 14px;
}
.qi{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    color:#666;
    font-size: 14px;
}
.taskMoneywe{
    display: block;
    width: 40px;
    height: 40px;
    background: url(../../../assets/PartIndex/taskdetails.png) no-repeat -120px 8px;
    background-size: 400%;
}
.stateMoneywe{
    width: 100%;
    text-align:left;
    height: 40px;
    line-height: 40px;
    color:#36d9d6;
    font-size: 16px;
    font-weight: bold;
}
.one{
    width: 100%;
    color: #666;
    line-height: 1.5;
    padding-bottom: 5px ;
    box-sizing: border-box;
}
.budetails{
    background: #fff;
}
.share{
    height: 56px;
    position: fixed;
    bottom: 0;
    background: #fff;
}
.share div:last-child p{
    width: 94%;
    height: 44px;
    margin-top: 4px;
    background: #36d992;
}
.share div:last-child p i{
     display: inline-block;
    width: 100%;
    height: 100%;
    background: url(../../../assets/PartBible/star.png) no-repeat center center;
    background-size: 52%;
}
.share div:first-child i{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../../../assets/PartBible/share.png) no-repeat 9px 14px;
    background-size: 70%;
}
.share div:first-child p{
     width: 94%;
     margin: 0 auto;
    height: 44px;
    background: #36d9d6;
    margin-top: 4px;
    color:#fff;
    font-size: 16px;
    text-align: center;
    line-height: 44px;
}
.hai{
    padding-left:10px; 
}
.ya{
    padding-top: 5px;
}
.nb{
    margin-bottom: 2rem;
}
.subText{
    margin-top: 1.2rem;
           background: #fff;
                  margin-bottom: 1px;
}
.subText div{
       height: 60px;
}
.subText p{
    color:#666;
    font-size: 16px;
    padding: 4px  0; 
}
.upload{
    height: 120px;
    background: #fff;
    margin-bottom: 6px;
}
.upload p{
    color:#666;
}
.chua /deep/ .van-uploader__wrapper{
    margin: 14px 0 0 14px;
}
</style>