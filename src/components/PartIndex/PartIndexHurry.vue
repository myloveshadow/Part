<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5',marginTop:'1.2rem'}">
            <van-col span="24">
                    <van-nav-bar title="急招专场"   left-arrow  @click-left="onClickLeft" :fixed="true" />
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
export default {
    data(){
        return {
             height:window.innerHeight || document.documentElement.clientHeight,
              list: [],
      loading: false,
      finished: false
        }
    },
    methods:{
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
 .van-hairline--bottom{    /*穿透*/
      background: #36d9d6;  
    }
.van-hairline--bottom{
    background: #36d9d6;
}
.van-nav-bar__title{
    color:#fff;
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
</style>