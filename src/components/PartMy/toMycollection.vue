<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5'}">
            <van-col span="24">

            <van-nav-bar title="我的收藏"    left-arrow  @click-left="onClickLeft" :fixed="true" />

        </van-col>
            <van-col span="24" style="margin-top:1.3rem">
                <van-col span="11">
                    <p class="partCollention" :class="{bibleCollection:!tabColor}" @click="tabColor=false" >兼职收藏</p>
                </van-col>
                <van-col span="1">
                    <i class="line"></i>
                </van-col>
                <van-col span="12">
                    <p class="partCollention" :class="{bibleCollection:tabColor}" @click="tabColor=true" >宝典收藏</p>
                </van-col>
            </van-col>

            <!--兼职收藏-->
            <van-col span="24">
                <van-cell :title="PartCollection.PartCollectionTitle" :label="PartCollection.PartCollectionOverTime" v-for="(PartCollection,index) in PartCollections" :key="index" v-show="!tabColor" >
                    <van-col span="12" slot="default" class="bgWhy" :class="{bgSpan:PartCollection.isFilled}">{{PartCollection.PartCollectionValue}}</van-col>
                </van-cell>
                <van-cell :title="PartCollection.PartCollectionTitle" :label="PartCollection.PartCollectionOverTime" v-for="(PartCollection,index) in PartCollections" :key="index" v-show="tabColor" >
                    <van-col span="12" slot="default" class="bgWhy">
                        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" class="collImg" srcset="">
                    </van-col>
                </van-cell>
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
        return {
             height:window.innerHeight || document.documentElement.clientHeight,
             tabColor:false,
             PartCollections:[{PartCollectionTitle:'招聘生鲜蔬菜水果包装',PartCollectionValue:'正在招',PartCollectionOverTime:'截止日期：2019-12-55 15:30',isFilled:0},
                                {PartCollectionTitle:'招聘生鲜蔬菜水果包装',PartCollectionValue:'正在招',PartCollectionOverTime:'截止日期：2019-12-55 15:30',isFilled:0},
                                {PartCollectionTitle:'招聘生鲜蔬菜水果包装',PartCollectionValue:'已招满',PartCollectionOverTime:'截止日期：2019-12-55 15:30',isFilled:1}
             
             ]
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
    font-size: 20px;
}
.van-cell{
    margin-top:5px;
}
.partCollention{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
      color: #999;
    font-size: 15px;
    font-weight: 500;    
}
.van-cell__title span{
     overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
}
.bibleCollection{
    color:#36d9d6;
}
i.line{
    display: block;
    width: 2px;
    margin:  0 auto;
    height: 22px;
    background: #666;
    margin-top: 4px;
}
.bgWhy{
    position: absolute;
    right: 0;
    width: 60px;
    height: 40px;
    background: #36d9d6;
    color:#fff;
    text-align: center;
    border-radius: 2px;
    line-height: 40px;
}
.bgSpan{
    background: #999;
}
.collImg{
    width: 100%;
}
</style>