<template>
    <van-row>
        <van-col span="24">
            <van-col span="24" style="margin-top:1.2rem">
                <van-nav-bar  title="找实习"  left-arrow  @click-left="onClickLeft" :fixed="true" />
            </van-col> 
            <van-col span="24">
                <van-dropdown-menu class="cople">
                   <van-dropdown-item  v-model="value1">
                     <div slot="title">全部岗位</div>
                     <van-col span="22" offset="1"  slot="default">
                      <van-row type="flex" justify="space-around">
                        <van-col span="5"  v-for="(list,index) in lists" :key="index" class="yang">{{list}}</van-col>
                        <van-col span="5">span: 6</van-col>
                        <van-col span="5">span: 6</van-col>
                         <van-col span="5">span: 6</van-col>
                          <van-col span="5">span: 6</van-col>
                           <van-col span="5">span: 6</van-col>
                      </van-row>
                     </van-col>
                   </van-dropdown-item>
                   <van-dropdown-item  v-model="value2">
                     <div slot="title">实习天数</div>
                     <van-col span="22" offset="1"  slot="default" >
                      <van-row type="flex" justify="space-around">
                        <van-col span="5"  v-for="(list,index) in lists" :key="index" class="yang">一天</van-col>
                        <van-col span="5">span: 6</van-col>
                        <van-col span="5">span: 6</van-col>
                         <van-col span="5">span: 6</van-col>
                          <van-col span="5">span: 6</van-col>
                           <van-col span="5">span: 6</van-col>
                      </van-row>
                     </van-col>
                   </van-dropdown-item>
                    <van-dropdown-item  v-model="value3">
                     <div slot="title">日薪(元)</div>
                     <van-col span="22" offset="1"  slot="default" >
                      <van-row type="flex" justify="space-around">
                        <van-col span="5"  v-for="(list,index) in lists" :key="index" class="yangend">一天</van-col>
                        <van-col span="5">span: 6</van-col>
                        <van-col span="5">span: 6</van-col>
                         <van-col span="5">span: 6</van-col>
                          <van-col span="5">span: 6</van-col>
                           <van-col span="5">span: 6</van-col>
                      </van-row>
                     </van-col>
                   </van-dropdown-item>
                </van-dropdown-menu>
            </van-col>
            <van-col span="24">
              <van-cell title="名遇到" label="店长实习生">
                <div slot="icon" class="shipIcon">
                 <van-image width="40" height="40" round src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </div>
                <div class="shipValue" slot="default">
                  <p class="shipDate">09-39</p>
                  <p class="shipMoney"><span>100~120</span>元/天</p>
                </div>
              </van-cell>
            </van-col>
        </van-col>
    </van-row>    
</template>
<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem,Image } from 'vant';
import 'vant/lib/dropdown-item/index.css'
import 'vant/lib/dropdown-menu/index.css'
import 'vant/lib/image/index.css'
Vue.use(DropdownMenu).use(DropdownItem).use(Image);
export default {
      data() {
    return {
      value1: 0,
      value2: 'a',
      value3:0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option3: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      lists:['软件','客服','行政','运营','反应','销售','人力']
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
.van-nav-bar__title{
    color:#fff;
}
.van-nav-bar .van-icon,.van-nav-bar__text{
    color:#fff;
    font-size: 12px;
}
/*丢失的属性*/
 .cople  /deep/ .van-dropdown-item__content {
    position: absolute;
    max-height: 80%;
}
.van-row--flex{
  flex-wrap: wrap;
}
.yang{
  width: 17%;
  text-align: center;
  color: #999;
  border: 1px solid #999;
  border-radius: 4px;
  margin-top: 6px;
  line-height: 24px;
}
.yangend{
  text-align: center;
  color: #999;
  border: 1px solid #999;
  border-radius: 4px;
  margin-top: 6px;
  line-height: 24px;
}
.shipIcon{
  margin: 4px 8px  0 0 ;
}
.van-cell__title span{
  color:#333;
  font-weight: bold;
}
.van-cell__label{
  color: #666;
}
.shipDate,.shipMoney{
  color:#999;
}
.shipMoney span{
  color:#36d9d6;
}
</style>