<template>
    <van-row>
        <van-nav-bar  title="宝典"  :fixed="true"/>
        <van-col span="24" class="Biblehead">
            <van-list  v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad">
               <van-cell  v-for="item in list"  :key="item" :title="item">
                 <div slot="title">
                       <van-col span='24'>
            <van-col span="24"  class="BibleBox" >
                <router-link to="/bible/detail"> <img src="@/assets/PartBible/excel.png" class="BibleImg" alt=""> </router-link>
                <router-view></router-view>
                <p class="BibleText">技能宝典|Excel用不熟练？<span>2019-09-27</span></p>
            </van-col>
        </van-col>
                 </div>

                </van-cell> 
            </van-list>
        </van-col>
    <TarBar/>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { List,Cell } from 'vant';
import TarBar from "@/components/Tabbar";
import 'vant/lib/nav-bar/index.css';
Vue.use(NavBar)
export default {
    name:'Bible',
    data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  components:{TarBar},
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
    }
  }
}
</script>
<style scoped>
.van-nav-bar{
    background: #36d9d6;
}
.van-nav-bar__title{
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
}
.van-cell{
    padding: 0;
}
/**头部填充 */
.Biblehead{
    margin-top: 1.2rem;
}
.BibleBox{
    position: relative;
    margin-bottom: 6px;
}
.BibleImg{
    width: 100%;
    height: 200px;
}
.BibleText{
    width: 100%;
    height: 30px;
    position: absolute;
    background: #262624;
    color:#fff;
    bottom: 3px;
    opacity: .5;
    line-height: 30px;
    font-size: 14px;
    text-indent: 1em;
}
.BibleText span{
    font-size: 12px;
   display: block;
   float: right;
   margin-right: 2em;

}
</style>