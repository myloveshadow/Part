<template>
    <van-row>
        <van-col span="24">
            <van-col span="24">

                 <van-nav-bar title="热门兼职"  class="wrapper"   left-arrow  @click-left="onClickLeft" :fixed="true" />

           </van-col>
           <van-col span="24" style="margin-top:51px" class="cople">
                <van-dropdown-menu>
                  <van-dropdown-item  v-model="value1">
                      <div slot="title">
                          <p>岗位</p>
                      </div>
                      <van-col span="23" slot="default">
                            <van-row gutter="" >
                              <van-col span="5" offset="1" v-for="(screen,index) in screenings" :key="index">
                                 <p class="screening" :class="{ischeck:screen.ischecked}" @click="screen.ischecked==0?screen.ischecked=1:screen.ischecked=0">{{screen.screeningText}}</p>
                              </van-col>
                              <van-col span="20" offset="2">
                                  <van-row type="flex" justify="space-around">
                                    <van-col span="6" offset="1"><van-button square type="primary" size="small" color="#36d9d6" @click="ClickMe">方形按钮</van-button></van-col>
                                    <van-col span="6" offset="1"><van-button square type="primary" size="small" color="#36d9d6">方形按钮</van-button></van-col>
                                    <van-col span="6" offset="1"><van-button square type="primary" size="small" color="#36d9d6">方形按钮</van-button></van-col>
                                  </van-row>
                              </van-col>
                            </van-row>
                      </van-col>
                  </van-dropdown-item>
                  <van-dropdown-item v-model="value2" :options="option2" />
                  <van-dropdown-item v-model="value3" :options="option3" />
                </van-dropdown-menu>
           </van-col>
           <van-col span="24">
               <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="400">
                     <van-cell  v-for="item in list" :key="item"  title="图书管理员" label="100~120元/天" >
                         <van-col slot="icon" span="4">
                             <van-image round width="44px" height="44px"  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                         </van-col>
                              <van-col slot="default" span="4"  class="listTextRight">
                                    <p>认证</p>
                                    <p>宝山区</p>
                                </van-col>
                     </van-cell>
               </van-list>
           </van-col>
        </van-col>
    </van-row> 
</template>
<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem,Popup,Image,  Button } from 'vant';
import 'vant/lib/dropdown-item/index.css'
import 'vant/lib/dropdown-menu/index.css';
import 'vant/lib/popup/index.css';
import 'vant/lib/image/index.css'
import 'vant/lib/button/index.css'
Vue.use(DropdownMenu).use(DropdownItem).use(Popup).use(Image).use(Button)
export default {
    data(){
        return {
            list: [],
      loading: false,
      finished: false,
             value1: 0,
      value2: 'a',
      value3:'c',
      checked:false,
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
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      screenings:[{screeningText:'软件开发',ischecked:0},
                  {screeningText:'服装导购',ischecked:0},
                  {screeningText:'发单',ischecked:0},
                  {screeningText:'地推',ischecked:0},
                  {screeningText:'软件开发',ischecked:0},
                  {screeningText:'软件开发',ischecked:0},
                  {screeningText:'软件开发',ischecked:0},
                  {screeningText:'软件开发',ischecked:0},
                  {screeningText:'软件开发',ischecked:0}]
        }
    },
    methods:{
        ClickMe(){
           this.$axios.defaults.headers['Authorization'] = "APPCODE 565241cd69ff49f6aded13725cc1178c";
            this.$axios.get('/area/query?parentid=1')
                .then(function(response){
                    console.log(response)
                })
                .catch(function (error) {
                       console.log(error);
                });
        },
        onClickLeft(){
            history.back(1);
        },
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
.wrapper /deep/ .van-hairline--bottom{    /*穿透*/
      background: #36d9d6;  
    }
.van-hairline--bottom{
    background: #36d9d6;
}
.van-nav-bar__title{
    color:#fff;
}
.van-nav-bar .van-icon{
    color:#fff;
}
/*丢失的属性*/
 .cople  /deep/ .van-dropdown-item__content {
    position: absolute;
    max-height: 80%;
}

.van-cell__title{
    color:#333;
    font-size: 16px;
        padding-top: 4px;
    padding-left: 4px;
}
.van-cell__title span{
    display: inline-block;
    width: 230px;
}
.van-cell__label{
    color:#36d9d6;
}
.listTextRight{
    position: absolute;
    right: 40px;
}
.listTextRight>p{
    height: 20px;
    font-family: Arial, Helvetica, sans-serif;
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
/*筛选*/
.screening{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    border:1px solid #999;
    border-radius: 4px;
    color:#999;
    font-size: 0.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 8px;
}
.ischeck{
    background: #36d9d6;
    color:#fff;
}
/*船头布局*/
</style>