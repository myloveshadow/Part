<template>
    <van-row class="bg">
        <van-col span="24" class="BibleDetail">
            <img src="@/assets/PartBible/excel.png" alt="">
        </van-col>
               <van-col span="24">
               <van-popup  v-model="show"  position="bottom" :style="{ height: '30%'}" :overlay="true"> 
                   <van-col span="24">
                         <van-row type="flex" justify="space-around">
                                 <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                     <p>微信好友</p>
                                 </van-col>

                                 <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                      <p>我是你爸</p>
                                 </van-col>
                                 <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                     <p>你爸是我</p>
                                 </van-col>
                                 <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                     <p>哈哈哈哈</p>
                                 </van-col>
                        </van-row>
                         <van-row type="flex" justify="space-around">
                               <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                     <p>我凌云志</p>
                                 </van-col>
                                 <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                     <p>风啊啊</p>
                                 </van-col>
                                 <van-col span="5" class="shareLogo">
                                     <img src="@/assets/PartBible/shareWechat.png" class="shareImg" alt="">
                                     <p>浪好大啊</p>
                                 </van-col>
                                 <van-col span="5" class="shareLogo"></van-col>

                        </van-row>
                   </van-col>
                </van-popup>
        </van-col>
        <van-col span="24">
            <van-col span="23" offset="1"><p class="MainTitle">技能宝典|Excel用不熟练？</p></van-col>
            <van-col span="7" offset="1" class="firstTxt">
                <i></i>
                <p>2019-12-21</p>
            </van-col>
            <van-col span="16" class="firstTxtBg">
                <i></i>
                <p>166</p>
           </van-col>
        </van-col>
        <van-col span="24">
            <van-list  v-model="loading"  :finished="finished" finished-text="没有更多了" @load="onLoad">
           
                <van-cell v-for="item in list" :key="item"  :title="item"> 
                     <van-col span="22" offset="1" slot="title">
                <p class="subTitle"><i>• &nbsp;</i>设置最近打开的文件名个数</p>
                <p class="BibleContent">打开“工具”，选“选项”，再选“常规”，在“最近使用的文件清单”下面的文件个数输入框中改变文件数目即可。若不在菜单中显示最近使</p>
            </van-col>

                </van-cell>
            </van-list>

        </van-col>
        <!--end-->
        <van-col span="24" class="share">
            <van-col span="21"><p @click="showPopup"><i></i> 分享</p></van-col>
            <van-col span="3"><p><i></i></p></van-col>
        </van-col>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { List,Cell } from 'vant';
import { Popup } from 'vant';
import { Overlay } from 'vant';
import 'vant/lib/popup/index.css';
import 'vant/lib/list/index.css';
import 'vant/lib/cell/index.css';
import 'vant/lib/overlay/index.css'
Vue.use(List).use(Cell).use(Popup).use(Overlay);
export default {
     data() {
    return {
      list: [],
      loading: false,
      finished: false,
      show:false
    };
  },

  methods: {
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
    },
     showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
.bg{
    background: #f5f5f5;
}
/*遮罩层*/
.shareCeng{
    width: 100%;
    height: 80%;
    position: fixed;
    background: #36d992;
    opacity: 0.8;
}
.van-cell{
    background: #f5f5f5;
}
.BibleDetail{
    height: 240px;
}
.overlayTitle{
    background: #333;
}
.BibleDetail img{
    width: 100%;
    height: 100%;
}
.MainTitle{
    font-size: 18px;
    color:#333;
    font-family: Arial, Helvetica, sans-serif;
    margin: 6px 0 6px 0; 
}
.firstTxt>p,.firstTxtBg>p{
    display: inline-block;
    color:#999;
    position: relative;
    top:-6px;
}
.firstTxt i{
    display: inline-block;
    width:25px;
    height: 25px;
    background: url(../../assets/PartBible/BibleDate.png) no-repeat 5px 5px;
    background-size: 60%;
}
.firstTxtBg i{
    display: inline-block;
    width:25px;
    height: 25px;
    background: url(../../assets/PartBible/readNum.png) no-repeat 5px 5px; 
    background-size: 60%;
}
.subTitle{
    font-size: 16px;
    color:#333;
}
.BibleContent{
    font-size: 14px;
    color: #999;
    text-indent: 2em;
    margin: 2px auto 2px;
    line-height: 20px;
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
    background: url(../../assets/PartBible/star.png) no-repeat center center;
    background-size: 52%;
}
.share div:first-child i{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../../assets/PartBible/share.png) no-repeat 9px 14px;
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
.shareLogo{
    margin: 0 auto;
    margin-top: 8px;
}
.shareLogo p{
    text-align: center;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color:#999;
    padding-left:10%; 
}
.shareImg{
    width: 80%;
    padding-left: 10%;
}
</style>