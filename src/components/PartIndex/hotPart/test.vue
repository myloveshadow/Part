<template>
  <van-row>
      <van-col span="24">
  <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
      </van-col>
  </van-row>
</template>
<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem,Popup} from 'vant';
import 'vant/lib/dropdown-menu/index.css'
import 'vant/lib/dropdown-item/index.css'    //按需引入导致部分属性没有显示

import 'vant/lib/popup/index.css'
Vue.use(DropdownMenu).use(DropdownItem).use(Popup);
export default {
     data() {
    return {
       value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
}
</script>
<style scoped>
.van-dropdown-item__content {
    position: absolute;
    max-height: 80%;
}
</style>