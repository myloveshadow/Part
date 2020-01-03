<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
            
                     <van-col span="24">
                         <van-nav-bar  :fixed="true">
                         <van-col span="24" slot="title">
                             <van-col span="7" offset="6" ><p class="msg" :class="{ischec:ischeck}" @click="ischeck=true  " >消息</p></van-col>
                             <van-col span="4" > <p class="friend" :class="{ischec:!ischeck}" @click="ischeck=false">好友</p> </van-col>
                         </van-col>
                         <van-col span="24" slot="right">
                             <van-icon name="plus"  size="26px" @click="msgsend"/>
                         </van-col>
                       </van-nav-bar>
                     </van-col>
            <van-col span="24" v-show="ischeck">
                     <!--消息-->
                     <van-col span="24">
                         <van-col span="24" class="msgtop">
                             
                             <van-cell  title="小猫爱吃鱼" label="最近找的怎么样了" value="2019-10-45">
                                 
                                 <van-col span="3" slot="icon" class="a">
                                     <router-link to="/message/del">
                                     <van-icon  :name="img" size="44" info="9" color="#bc3867" />
                                     </router-link>
                                 </van-col>
                                 
                             </van-cell>
                              <van-cell  title="小猫爱吃鱼" label="最近找的怎么样了" value="2019-10-45">
                                 <van-col span="3" slot="icon" class="a">
                                     <van-icon  :name="img" size="44" info="9" color="#bc3867" />
                                 </van-col>
                             </van-cell>
                              <van-cell  title="小猫爱吃鱼" label="最近找的怎么样了" value="2019-10-45">
                                 <van-col span="3" slot="icon" class="a">
                                     <van-icon  :name="img" size="44" info="9" color="#bc3867" />
                                 </van-col>
                             </van-cell>
                         </van-col>
                     </van-col>
             </van-col>
             <van-col span="24" v-show="!ischeck">
                    <van-col span="24" style="margin-top:1.2rem">
                    <van-search placeholder="输入好友昵称快速查找" v-model="value" class="chuan" background="#fff" shape="round"/>
                    </van-col>
                    <van-col span="24">

                            <van-index-bar :sticky="false" class="ji" highlight-color="#333">
  <van-index-anchor index="A" />
  <van-cell>

      <van-col span="3" slot="icon" class="a">
                                     <van-icon  :name="img" size="44"  color="#bc3867" />
                                 </van-col>
        <van-col span="12" slot="title" class="msgTxt">
            爱吃肉的小拉菲
        </van-col>

  </van-cell>
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
<van-index-anchor index="C" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="D" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-index-anchor index="E" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="F" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-index-anchor index="G" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="H" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
</van-index-bar>

                    </van-col>
             </van-col>
        </van-col>
        <TabBar/>
        <router-view></router-view>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { Icon,Search,IndexBar, IndexAnchor} from 'vant';
import 'vant/lib/icon/index.css';
import 'vant/lib/info/index.css';
import 'vant/lib/search/index.css';
import 'vant/lib/index-bar/index.css';
import 'vant/lib/index-anchor/index.css';
import TabBar from "@/components/Tabbar"; //tabbar
Vue.use(Icon).use(Search).use(IndexBar).use(IndexAnchor);
export default {
    name:'PartMessage',
    data(){
        return {
            ischeck:true,
             height:window.innerHeight || document.documentElement.clientHeight,
             img:require('@/assets/PartIndex/test1.png'),
             value:''
        }
    },
    methods:{
        msgsend(){
            console.time;
        }
    },
    components:{TabBar}
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
    color:#fff;
}
.van-cell__title{
    text-indent: 1em;
    font-size: 16px;
   /* font-weight: 600;  */
    color:#333;
}
.van-cell__label{
    font-size: 14px;
    font-weight: normal;
}
.msg,.friend{
    margin-top:8px;
    background: #fff;
    color:#333;
    width: 63px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #fff;
}
.friend{
    margin-left: -2px;
}
.ischec{
    background: #36d9d6;
    color:#fff;
}
.msgtop{
    margin-top: 1.4rem;
}
.a{
    margin-top: 4px;
}
.chuan >>> .van-field__control{
    margin-top:5px;
}
.ji >>> .van-index-anchor{
    background: #f5f5f5;
}
.ji >>> .van-index-bar__sidebar{
    color: #36d9d6;
}
.msgTxt{
    line-height: 3;
    font-weight: normal;
    color:#333;
}
</style>