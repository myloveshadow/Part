<template>
<van-row>
    <van-col span="24">
     <van-nav-bar  title="门任务"  class="wrapper"   left-arrow  @click-left="onClickLeft" :fixed="true" @click-right="onClickRight"  right-text="我的任务" />
    </van-col>    
    <van-col span="24" style="margin-top:1.2rem">
        <van-dropdown-menu class="mydeep" active-color="#36d9d6">
  <van-dropdown-item  v-model="value1" :options="option1"  class="tab" >
      <div slot="title">
          全部分类
      </div>
  </van-dropdown-item>
  <van-dropdown-item  v-model="value2" :options="option2">
        <div slot="title">最新任务</div>
  </van-dropdown-item>
</van-dropdown-menu>
    </van-col>
    <van-col span="24">
        <van-cell title="我才"  label="15元" v-for="(intn,index) in tabtask" :key="index" to="/index/task/detail">
            <van-col slot="icon"  span="3">
                <img src="@/assets/PartIndex/test1.png" alt="" srcset="" class="taskimg">
            </van-col>
            <van-col span="24" slot="default">
                <p class="tsg">剩余:<span>1</span>次</p>
            </van-col>
        </van-cell>
    </van-col>
</van-row>    
</template>
<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem} from 'vant';
import 'vant/lib/dropdown-item/index.css';
import 'vant/lib/dropdown-menu/index.css';

Vue.use(DropdownMenu).use(DropdownItem);
export default {
     data() {
    return {
        num:1,
      value1: 2,
      value2: 'a',
      tabtask:['全部分类','调查','关注','分享','下载','其它'],
      option1:[
          { text: '全部任务', value: '0' },
          { text: '调查', value: '1' },
          { text: '关注', value: '2' },
          { text: '分享', value: '3' },
          { text: '下载', value: '4' },
          { text: '其它', value: '5' },
      ],
      option2: [
        { text: '高新任务', value: 'a' },
        { text: '最新任务', value: 'b' },
      ]
    }
  },
    methods:{
        onClickLeft(){
            history.back(1);
        },
        onClickRight(){
            this.$router.push('/index/task/mytask/all')
        },
        TabClick(index){
            console.log(index);
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
 .mydeep /deep/ .van-dropdown-item__content {
    position: absolute;
    max-height: 80%;
}
.tab /deep/ .van-cell__title{
    text-align: center;
    font-family:  "Microsoft YaHei";
    box-sizing: border-box;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    opacity: 0.6;
    text-indent: 2em;
}
.tab /deep/ .van-cell__value{
     /*效果待定 */
     color:#fff;
}
.tab /deep/ .van-cell__title::active{
    background: #36d9d6;
    color:#fff;
}
 .van-cell__title{
 text-indent: 1em;
}

.van-cell__label{
    color:#36d9d6;
}
.taskimg{
    width: 100%;
}
.tsg{
    width: 100%;
    height: 100%;
    line-height: 1rem;
}
.tsg span{
    color:#36d9d6;
}
</style>