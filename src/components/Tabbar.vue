<template>
<div> 
    <van-tabbar class="Bgtabbar" :route="true" v-model="active" :fixed="true" :border="true" :safe-area-inset-bottom="true" active-color="#36d9d6" inactive-color="#333" >
  <van-tabbar-item v-for="(item,index) in tabbarIcon" :key="index" :to="item.routerTo" >
      <span>{{item.tatbarText}}</span>
    <img slot="icon" slot-scope="props"
      :src="props.active ? item.inactive :item.active">
  </van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import 'vant/lib/tabbar/index.css';
import 'vant/lib/tabbar-item/index.css';
import 'vant/lib/icon/index.css';
Vue.use(Tabbar).use(TabbarItem).use(Icon);
export default {
    name:'Tabbar',
    data() {
       return {
        active:0,
        tabbarIcon:[{active:require("@/assets/tabbar/tabpart.png"),
                     inactive:require("@/assets/tabbar/bluepart.png"),
                     tatbarText:'兼职',
                     routerTo:'/index'
                     },
                    {
                     active:require("@/assets/tabbar/tabbible.png"),
                     inactive:require("@/assets/tabbar/bluebible.png"),
                     tatbarText:'宝典',
                     routerTo:'/bible'
                    },
                    {
                     active:require("@/assets/tabbar/tabmessage.png"),
                     inactive:require("@/assets/tabbar/bluemessage.png"),
                     tatbarText:'消息',
                     routerTo:'/message'
                    },
                    {
                        active:require("@/assets/tabbar/tabmy.png"),
                     inactive:require("@/assets/tabbar/bluemy.png"),
                     tatbarText:'我的',
                     routerTo:'/my'
                    }
                    ]
    }
  }
}
</script>
<style>
.Bgtabbar{
    background: #f5f5f5;
}
</style>