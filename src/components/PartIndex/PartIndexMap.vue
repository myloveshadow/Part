<template>
        <van-row>
            <van-col span="24">
                <van-col span="24">
                      <van-nav-bar title="选择城市"  class="wrapper"   left-arrow  @click-left="onClickLeft" :fixed="true" />
                </van-col>
                <van-col span="24" style="margin-top:51px">
                        <van-tree-select :items="items"  :active-id.sync="activeId"  :main-active-index.sync="activeIndex"/>
                </van-col>
            </van-col>
        </van-row>
</template>
<script>
import Vue from 'vue';
import { TreeSelect ,Sidebar, SidebarItem} from 'vant';
import 'vant/lib/tree-select/index.css';
import 'vant/lib/sidebar/index.css';
import 'vant/lib/sidebar-item/index.css';
Vue.use(TreeSelect);
var items=[
  {
    // 导航名称
    text: '北京',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
      },
      {
        text: '杭州',
        id: 2
      }
    ]
  },
   {
    // 导航名称
    text: '其它城市',
    children: [
      {
        // 名称
        text: '暂未开放其它合作城市，尽情期待',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
         disabled: true
      }
    ]
  }
]
export default {
     data() {
    return {
      items,
      activeId: 1,
      activeIndex: 0
    };
  },
    methods:{
        onClickLeft(){
            history.back(1);
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
.van-sidebar-item--select{
    border-color:#36d9d6;
}
.van-tree-select__item{
    font-weight: normal;
}
.van-tree-select__item--active{
    color:#36d9d6;
}
</style>