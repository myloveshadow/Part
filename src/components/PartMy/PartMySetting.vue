<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
            <van-col span="24">
                 <van-nav-bar title="设置"   left-arrow  @click-left="onClickLeft" :fixed="true"  />
            </van-col>
            <van-col span=24 style="margin-top:51px"> 
                <van-cell  :title="PartMySet" v-for="(PartMySet,index)  in PartMySettings" :key="index" :is-link="(index!==1 && index!==2)">
                    <van-col slot="default" span="12" offset="12" v-if="index==1">
                            <van-switch :value="checked" size="20px" @input="onInput" />
                    </van-col>
                    <van-col slot="default" span="12" offset="12"  v-if="index==2">
                            <van-switch :value="checked" size="20px" @input="onInput" />
                    </van-col>
                </van-cell>
            </van-col>
        </van-col>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { NavBar,Switch,Dialog,Button} from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/switch/index.css';
import 'vant/lib/dialog/index.css';
import 'vant/lib/button/index.css';
Vue.use(NavBar).use(Switch).use(Dialog).use(Button);
export default {
    name:'Setting',
    data(){
        return {
            height:window.innerHeight || document.documentElement.clientHeight,
            checked:true,
            PartMySettings:['接收提醒消息','声音','震动','修改密码','清除缓存']
        }
    },
    methods:{
        onClickLeft(){
            history.back(1);
        },
        onInput(checked){

                 Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked;
      });

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
.van-nav-bar .van-icon{
    color: #fff;
}
</style>