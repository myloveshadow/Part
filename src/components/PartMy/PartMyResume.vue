<template>
    <van-row :style="{height:height+'px',background:'#f5f5f5'}">
       <van-col span="24">
        <van-nav-bar title="我的简历"  :left-arrow="true"  @click-left="onClickLeft"/>
       </van-col>
        <van-col span="24">
           <van-cell  :title="ResumeDetail.ResumePortraitTitle" is-link :clickable="true" v-for="(ResumeDetail,index) in ResumeDetails" :key="index" @click="isShowPicker(index)"> 
               <div slot="default" v-if="index==0">
                   <van-uploader>
                        <van-image round width="30px" height="30px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </van-uploader>
               </div>
               <div slot="default" v-else-if="index==4">
                   <van-cell-group >
                       <div class="PartN" >
                         <van-field v-model="ResumeDetail.PartMyNickInput" input-align="right" :border="true" :clickable="false"/>
                         </div>
                    </van-cell-group>
               </div>
                <div slot="default" v-else-if="index==9">
                   <van-cell-group >
                       <div class="PartN" >
                         <van-field v-model="ResumeDetail.PartMyNickInput" input-align="right" :border="true" :clickable="false" type="textarea"/>
                         </div>
                    </van-cell-group>
               </div>
               <div slot="default" v-else-if="index==10">
                   <van-cell-group >
                       <div class="PartN" >
                         <van-field v-model="ResumeDetail.PartMyNickInput" input-align="right" :border="true" :clickable="false" type="textarea"/>
                         </div>
                    </van-cell-group>
               </div>
               <div slot="default" v-else-if="index==7">
                   <van-cell-group >
                       <div class="PartN" >
                         <van-field v-model="ResumeDetail.PartMyNickInput" :border="false" input-align="right" clickable :value="value" @touchstart.native.stop="show = true"/>
                        <van-number-keyboard  v-model="ResumeDetail.PartMyNickInput"  :show="show"  :maxlength="11" @blur="show = false" theme="custom" close-button-text="完成"   />
                         </div>
                    </van-cell-group>
               </div>
               <div slot="default" v-else>
                   <van-cell-group >
                       <div class="PartN" >
                         <van-field v-model="ResumeDetail.PartMyNickInput" input-align="right" :border="true" :clickable="false"/>
                         </div>
                    </van-cell-group>
               </div>
           </van-cell>
         <!--   <van-cell  title="昵称" is-link> 
               <div slot="default">
                    <van-cell-group>
                         <van-field v-model="PartMyNickname"/>
                    </van-cell-group>
               </div>
           </van-cell>
            <van-cell  title="个性签名" is-link> 
               <div slot="default">
                   <van-cell-group>
                         <van-field v-model="PartMySignature" />
                    </van-cell-group>
               </div>
           </van-cell>
            <van-cell  title="真实姓名" is-link > 
               <div slot="default">
                    <van-cell-group>
                         <van-field v-model="PartMyUsername" />
                    </van-cell-group>
               </div>
           </van-cell>
            <van-cell  title="年龄" is-link  @click="ishowPicker" > 
               <div slot="default">
                    <van-cell-group>
                         <van-field v-model="PartMyAge" />
                    </van-cell-group>
               </div>
           </van-cell>
            <van-cell  title="性别" is-link  @click="isshowPicker" > 
               <div slot="default">
                   
               </div>
           </van-cell>
            <van-cell  title="身高" is-link @click="isShowPicker"> 
               <div slot="default">
                   
               </div>
           </van-cell>
            <van-cell  title="手机号" is-link> 
               <div slot="default">
                   <van-cell-group>
                         <van-field v-model="PartMyAge" />
                    </van-cell-group>
               </div>
           </van-cell>
            <van-cell  title="所在学校" is-link> 
               <div slot="default">
                   <van-cell-group>
                         <van-field v-model="PartMyAge" />
                    </van-cell-group>
               </div>
           </van-cell>
            <van-cell  title="个人经历" is-link> 
               <div slot="default">
                   <van-cell-group>
                         <van-field v-model="PartMyAge" />
                    </van-cell-group>
               </div>
           </van-cell> -->
           <van-col span="24"> 
            <van-popup v-model="showPicker" position="bottom">
                 <van-picker show-toolbar title="年龄" :columns="columns" @cancel="showPicker = false"  @confirm="onConfirm"  v-if="tab==1" />
                 <van-picker show-toolbar title="性别" :columns="gender" @cancel="showPicker = false"  @confirm="onConfirm"  v-else-if="tab==2"/>
                  <van-picker show-toolbar title="身高" :columns="tall" @cancel="showPicker = false"  @confirm="onConfirm" v-else-if="tab==0" />
            </van-popup>
        </van-col>
        </van-col>
    </van-row>
</template>
<script>
import Vue from 'vue';
import { NavBar,List ,Cell,Uploader,Field,Picker,Popup,NumberKeyboard} from 'vant';
Vue.use(NavBar).use(Uploader).use(Field).use(Picker).use(Popup).use(NumberKeyboard);
import 'vant/lib/picker/index.css';
import 'vant/lib/field/index.css';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/uploader/index.css';
import 'vant/lib/popup/index.css';
import 'vant/lib/number-keyboard/index.css';
export default {
    data(){
        return {
            value:'',
            show:false,
            tab:0,
            showPicker: false,
            ResumeDetails:[
                {ResumePortraitTitle:'头像',PartMyNickInput:''},
                {ResumePortraitTitle:'昵称',PartMyNickInput:'哎呀呀'},
                {ResumePortraitTitle:'个性签名',PartMyNickInput:'努力'},
                {ResumePortraitTitle:'真实姓名',PartMyNickInput:'你爸爸'},
                {ResumePortraitTitle:'年龄',PartMyNickInput:'22'},
                {ResumePortraitTitle:'性别',PartMyNickInput:'男'},
                {ResumePortraitTitle:'身高',PartMyNickInput:'130'},
                {ResumePortraitTitle:'手机号',PartMyNickInput:'13520051245'},
                {ResumePortraitTitle:'所在学校',PartMyNickInput:'北京大学'},
                {ResumePortraitTitle:'实习或兼职经历',PartMyNickInput:'你猜'},
                {ResumePortraitTitle:'个人评价',PartMyNickInput:'就不告dsfasdf asdfadgdg都发给对方的非官方的红烧豆腐啥都好诉你'}
            ],
            height: window.innerHeight || document.documentElement.clientHeight,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            gender:['男','女'],
            tall:[180,170,160]
        }
    },
    methods:{
        onClickLeft(){
            history.back(1);
        },
        onConfirm(value, index){
            this.showPicker=false;
        },
        showPopup() {
      this.show = true;
      console.log(this.show)
        },
        isShowPicker(index){
            if(index==4){
                 this.showPicker=true;
                this.tab=1;
            }else if(index==5){
                 this.showPicker=true;
                this.tab=2;
            }else if(index==6){
                 this.showPicker=true;
                this.tab=0;
            }
        }
    }
}
</script>
<style scoped>
.van-nav-bar__arrow{
    color:#fff;
}
.van-nav-bar{
    background: #36d9d6;
}
.van-nav-bar__title{
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
}
.van-field__control{
    text-align: right;
}
.PartN{
    margin-top: -6px;
}
.PartN div div input{
    outline: none;
}
</style>