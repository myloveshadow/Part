<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
           <van-col span="24">

            <van-nav-bar title="已关注商家"    left-arrow  @click-left="onClickLeft" :fixed="true" />

        </van-col>
        <van-col span="24" style="margin-top:1.3rem">
            <van-col span="24">
                 <van-cell  :title="onFouce.onFouceTitle" :label="onFouce.onFouceLabel" :icon="onFouce.onFouceIcon" v-for="(onFouce,index) in onFouces" :key="index" >
                    <van-col span="7" slot="right-icon" class="ziDing">
                       团队{{onFouce.onFouceTeam}}人
                    </van-col>
                 </van-cell>
            </van-col>
        </van-col>
        </van-col>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { NavBar} from 'vant';
import 'vant/lib/nav-bar/index.css';
Vue.use(NavBar);
export default {
    data(){
        return{
             height:window.innerHeight || document.documentElement.clientHeight,
             onFouces:[{onFouceTitle:'上海昊泰劳务服务有限公司',onFouceLabel:'认证商家',onFouceIcon:'https://img.yzcdn.cn/vant/cat.jpeg',onFouceTeam:'150~500'},
                       {onFouceTitle:'上海昊泰劳务服务有限公司',onFouceLabel:'认证商家',onFouceIcon:'https://img.yzcdn.cn/vant/cat.jpeg',onFouceTeam:'15~50'},
                       {onFouceTitle:'上海昊泰劳务服务有限公司',onFouceLabel:'认证商家',onFouceIcon:'https://img.yzcdn.cn/vant/cat.jpeg',onFouceTeam:'100~1000'}
             ]
        }
    },
    methods:{
        onClickLeft(){
            history.back(1)
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
    color:#fff;
}
.van-icon__image{
    width: 50px;
    height: 50px;
}
.van-cell__label{
    width: 60px;
    background: #ffdd00;
    color:#fff;
    text-align: center;
}
.ziDing{
    height: 19px;
    border:1px solid #999;
    position: absolute;
    top:36px;
    line-height: 18px;
    text-align: center;
    left: 40%;
    color:#999;
    border-radius: 2px;
    font-size: 12px;
}
</style>