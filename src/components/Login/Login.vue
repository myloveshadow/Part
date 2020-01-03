<template>
<van-row>
    <van-col span="24">
            <van-nav-bar :left-arrow="true" :fixed="true"
  :title="title"
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
        <form action="">
           <van-col class="tel">
               <label for="bgtel"></label>
               <input type="text" id="bgtel" placeholder="请输入手机号" v-model="telPhone">
            </van-col>
             <van-col class="pwd">
               <label for="pwd"></label>
               <input :type="inputIsShow" id="pwd" :placeholder="tabText" v-model="pwd">
               <i class="eye" :class="{show :isShow }" @click="showPwd" ></i>
            </van-col>
            <van-col class="pwd" v-if="isRegister">
                <label for="bgpwd"></label>
               <input type="text" id="bgpwd" placeholder="请输入验证码" v-model="testNum">
               <i class=RwgisterEye >获取验证码</i>
            </van-col>
            <van-col class="btn">
                <input type="button" :value="title" @click="Submit">
            </van-col>
        </form>
        <van-col class="tabPwd">
            <a @click="Register">点击注册</a>&nbsp;|&nbsp;
             <a @click="NewPassword">忘记密码?</a>
        </van-col>
    </van-col>
    <!--第三方登陆-->
   
    <van-col span="18" offset="3">
       <p class="threeLogin"><span>第三方登陆</span></p>
        <van-row type="flex" justify="space-around">
  <van-col span="5" class="lo-login" v-for="(logoImg,index) in logoImgs" :key="index"><img :src="logoImg" alt="" srcset=""></van-col>
</van-row>
    </van-col>
</van-row>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import 'vant/lib/toast/index.css';
export default {
    data:function(){
        return {
            isShow:false,
            inputIsShow:'password',
            isRegister:false,
            tabText:'请输入密码',
            telPhone:'',
            pwd:'',
            testNum:'',
            title:'登录',
            logoImgs:[require('@/assets/from/qq.png'),require('@/assets/from/wechat.png'),require('@/assets/from/weibo.png')]
        }
    },
     methods: {
    onClickLeft() {     
  
    },
    showPwd:function(){
        this.isShow=!this.isShow;
        if(this.isShow){
            this.inputIsShow='text'
        }else{
            this.inputIsShow='password'
        }

    },
    Register:function(){
        //注册
        this.telPhone='';
        this.pwd='';
        this.isRegister=!this.isRegister;
        if(this.isRegister){
            this.title='注册'
        }else{
            this.title='登录'
        }
    },
    NewPassword:function(){
        //修改密码
        this.telPhone='';
        this.pwd='';
         this.isRegister=!this.isRegister;
         console.log(this.isRegister)
        if(this.isRegister){
            this.title='找回密码'
            this.tabText='请输入新密码'
        }else{
            this.title='登录'
            this.tabText='请输入密码'
        }
    },
    Submit:function(){
        //先判断是登录||注册
        if(this.isRegister){
                //注册&&忘记密码
                //先上数据库查找有没有没有用户名 如果有 就是修改密码 如果没有 就向数据库增加一个用户
                var iszhu = true;
                if(iszhu){
                    var url =this.telPhone  
                }
        }else{
            //直接登录
            this.$router.push('/success');
            Toast('用户名或者密码错误');
        }
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
.tel,.pwd,.btn{
    width: 100%;
    margin-bottom: 14px;
    height: 50px;
    border: 1px solid #999999;
    border-radius: 10px;
      position: relative;
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
.tel label,.pwd label{
    display: inline-block;
    width: 50px;
    height: 100%;
   
}
.tel label{
    background: url(../../assets/from/tel.png) no-repeat;
    background-position: 12px  center;
     background-size: 40%;
}
.pwd label{
    background: url(../../assets/from/pwd.png) no-repeat;
      background-position: 12px  center;
       background-size: 40%;
}
.tel input,.pwd input{
    width: 50%;
    height: 90%;
    display: block;
    margin-top: -48px;
    margin-left: 50px;
    font-size: 18px;
    outline: none;
    border: none;
     font-family: Arial, Helvetica, sans-serif;
    color: #999;
    font-weight: normal;
}
input::-ms-input-placeholder{
        text-align: center;
}
input::-webkit-input-placeholder{
        text-align: center;
}
/**眼睛 */
.pwd .eye{
    display: block;
    width: 32px;
    height: 32px;
     background: url(../../assets/from/round.png) no-repeat;
      background-size: 60%;
     position: absolute;
     top: 38%;
     right: 0;
}
.pwd .RwgisterEye{
    display: block;
    width: 100px;
    height: 50px;
     position: absolute;
     top: 0;
     right: 0;
     text-align: center;
     line-height: 50px;
     color: #999;
     font-size: 16px;
}
.pwd .show{
     background: url(../../assets/from/showRound.png) no-repeat;
       background-size: 60%;
}
.tabPwd{
    text-align: center;
    margin-left:62%; 
    color: #999;
}
.tabPwd a{
    text-decoration: none;
    color: #999;
}
/**第三方登陆 */
.threeLogin{
    width: 100%;
    height: 30px;
    border-top: 1px solid #999;
    text-align: center;
    color: #999;
    font-size: 14px;
    margin-top: 34px;
}
.threeLogin span{
    display: block;
    width: 40%;
    margin: 0 auto;
    margin-top: -12px;
    background: #fff;
}
.lo-login{
    width: 100%;
    height: 50px;
    text-align: center;
}
.lo-login img{
    width: 50px;
    height: 50px;
}
</style>