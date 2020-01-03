<template>
<van-row>
    <van-col span="24">
            <van-nav-bar :left-arrow="true" :fixed="true"
  left-text="返回"
  @click-left="onClickLeft"
/>
    </van-col>
    <van-col span="8" offset="8" class="logo-img">        
          <img src="../../assets/logo.png" alt="" class="login-logo">
          <p>兼职门，简直了</p>
    </van-col>
    <!--表单&&手机号-->
    <van-col span="20" offset="2">
           <van-col class="tel">
               修改密码成功
            </van-col>
            <van-col class="btn">
                <input type="button" value="返回登陆">
            </van-col>     
    </van-col>
    <!--第三方登陆-->
</van-row>
</template>
<script>
export default {
    data:function(){
        return {}
    },
     methods: {
    onClickLeft() {
        history.back(1);     
    }
    
  }
}
</script>
<style scoped>
.van-nav-bar{
    background-color: #36d9d6;
}
.van-nav-bar__title{
    color: white;
   font-family: "Microsoft soft";
    letter-spacing: 2px;
}
.van-nav-bar__text{
    color: #fff;
}
/*重置顶部样式 */
.logo-img{
    margin-top: 100px;
}
.logo-img p{
    width: 110%;
   font-family: "Microsoft soft";
    font-size: 18px;
    color: #333333;
    margin-top: 6px;
    margin-bottom: 14px;
    margin-left: -5px;
}
.login-logo{
    width: 94%;
    margin: 0 auto;
}
/*表单 */
.tel,.btn{
    width: 100%;
    margin-bottom: 14px;
    height: 50px;
    border: 1px solid #999999;
    border-radius: 10px;
      position: relative;
}
.tel{
    text-align: center;
    line-height: 50px;
    color: #999;
    font-size: 16px;
}
.btn{
    border: none;
}
.btn input[type=button]{
    width: 100%;
    height: 100%;
    line-height: 100%;
    text-align: center;
    outline: none;
    border: none;
    font-size: 16px;
    color: #fff;
    background-color: #36d9d6;
    border-radius: 10px;
}
</style>