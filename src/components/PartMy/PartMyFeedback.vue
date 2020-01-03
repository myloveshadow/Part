<template>
    <van-row>
        <van-col span="24">
            <van-col span="24">
                 <van-nav-bar title="意见反馈"   left-arrow  @click-left="onClickLeft" :fixed="true" right-text="提交" />
            </van-col>
            <van-col span=24 :style="{height:height+'px',background:'#f5f5f5',marginTop:'51px'}">
                <van-col span="24">
                         <van-field v-model="value" placeholder="请输入您要反馈的问题" type="textarea"   :maxlength="200" :show-word-limit="true" :autosize="{minHeight: 140}"/>
                         <van-col span="24"  class="myTextarea">
                         <van-uploader v-model="fileList" multiple :max-count="3"/>
                         <p class="txt">(选填,上传照片,最多三张)</p>
                         </van-col>
                </van-col>
            </van-col>
        </van-col>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { NavBar,Field,Uploader} from 'vant';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/field/index.css';
import 'vant/lib/uploader/index.css';
Vue.use(NavBar).use(Field).use(Uploader);
export default {
    data(){
        return {
            height:window.innerHeight || document.documentElement.clientHeight,
            fileList: [],
            value:''
        }
    },
    methods:{
        onClickLeft(){
            history.back(1);
        },
        onClickRight() {
            console.log(1)
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
.van-nav-bar__text{
    color:#fff;
}
.van-field__control{
    height: 140px;
}
.van-field__body{
    height: 140px;
}
.myTextarea{
    background: #fff;
}
.txt{
    color:#666;
}
</style>