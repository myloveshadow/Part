<template>
    <van-row>
        <van-col span="24" :style="{height:height+'px',background:'#f5f5f5',marginTop:'1.2rem'}">
            <van-col span="24">
                <van-nav-bar title="兼职工位"   left-arrow  @click-left="onClickLeft" :fixed="true" />
            </van-col>
            <van-col span="24">
                <van-image height="220"  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            </van-col>
             <van-col span="24"  class="xia">
                    <van-col span="3" offset="1">
                        <i class="detailsMoney"></i>
                    </van-col>
                    <van-col span="10">
                        <p class="demoney"><span>¥13.00</span>/时</p>
                    </van-col>
                    <van-col span="9" class="detailsShow">浏览量:10414</van-col>
            </van-col>
            <van-col span="24" class="bian">             
                       <van-col span="2" offset="3">
                       <i class="staff"></i>
                   </van-col>
                   <van-col span="7">
                       <p class="stafftxt">工作人员</p>
                   </van-col>
                    <van-col span="12">
                   <van-col span="24">
                       <van-col span="4" offset="1">
                           <i class="gender"></i>
                        </van-col>
                        <van-col span="17">
                        <p class="gendertxt">24小时审核</p>
                        </van-col>
                   </van-col>
                </van-col>
                   <van-col span="2" offset="3">
                       <i class="detailsMap"></i>
                   </van-col>
                   <van-col span="7"><p class="qu">朝阳区</p></van-col>
                   <van-col span="12">
                       <van-col span="24">
                           <van-col span="4" offset="1">
                                <i class="detailweek"></i>
                           </van-col>
                           <van-col span="17">
                                <p class="weektxt">2019-12-12</p>
                           </van-col>
                       </van-col>
                      
                   </van-col>
            </van-col>
            <van-col span="24" class="si">
                <van-col span="3" offset="1" class="degongimg">
                     <van-image width="40" height="40" round  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </van-col>
                <van-col span="16">
                    <p class="detailsgong">上海昊泰劳务有限公司</p>
                    <div>
                        <p class="isCert">认证商家</p>
                        <span class="team">团队150~500人</span>
                    </div>
                </van-col>
                <van-col span="3" class="aarr">
                    <van-icon name="arrow" size="30" color="#999" />
                </van-col>
            </van-col>
            <!--兼职详情-->
            <van-col span="24" class="partdet">
                <van-col span="3" offset="1">
                    <i class="qin"></i>
                </van-col>
                <van-col span="20" class="dettxt">职位详情</van-col>
            </van-col>
            <!--岗位详情-->
            <van-col span="24" class="xi">
                <van-col span="23" offset="1" v-for="(iu,index) in jiu " :key="index">
                      <p class="detai">{{iu.ti}}<span>{{iu.subTitle}}</span></p>
                </van-col>
                 <van-col span="18" offset="3" class="warntxt">温馨提示：在线报名有利于商家实时查看您的简历，极大提高录取概率哦！</van-col>
            </van-col>
            <!--联系商家-->
            <van-col span="24" class="partdet">
                <van-col span="3" offset="1">
                    <i class="dephone"></i>
                </van-col>
                <van-col span="20" class="dettxt">联系商家</van-col>
                <van-col span="24" class="tel">
                    <van-col span="20" offset="4">手机:13641982565</van-col>
                </van-col>
                <van-col span="24">
                    <van-col  span="20" offset="4" class="prompt">
                           提示：凡收取费用的兼职需要谨慎
                    </van-col>
                 </van-col>
            </van-col>
            <!--报名&&分享-->
            <van-col span="24">
                <van-col span="19" offset="1"><p class="subser"><i></i><span>报名</span></p></van-col>
                <van-col span="3"><i class="shar"></i></van-col>
            </van-col>
        </van-col>
    </van-row>    
</template>
<script>
import Vue from 'vue';
import { Image ,Icon} from 'vant';
import 'vant/lib/image/index.css'
import 'vant/lib/icon/index.css'

Vue.use(Image).use(Icon);
export default {
    data(){
        return {
             height:window.innerHeight || document.documentElement.clientHeight,
             jiu:[
                 {ti:'招聘岗位:',subTitle:'招聘天猫生鲜（蔬菜水果）包装工作人员30名，每天都要'},{ti:'招聘岗位:',subTitle:'招聘天猫生鲜（蔬菜水果）包装工作人员30名，每天都要'},
                 {ti:'招聘岗位:',subTitle:'招聘天猫生鲜（蔬菜水果）包装工作人员30名，每天都要'},{ti:'招聘岗位:',subTitle:'招聘天猫生鲜（蔬菜水果）包装工作人员30名，每天都要'},
                 {ti:'招聘岗位:',subTitle:'招聘天猫生鲜（蔬菜水果）包装工作人员30名，每天都要'},{ti:'招聘岗位:',subTitle:'招聘天猫生鲜（蔬菜水果）包装工作人员30名，每天都要'},

             ]
        }
    },
    methods:{
        onClickLeft(){

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
.van-nav-bar .van-icon{
    color: #fff;
}
.detailsMoney{
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #36d9d6 url(../../assets/PartIndex/taskdetails.png) no-repeat -4px  -4px;
    background-size:1500%; 
}
.xia{
    padding: 8px 0;
    box-sizing: border-box;
    background: #fff;
}
.demoney{
    height: 34px;
    line-height: 34px;
    text-align: left;
    color: #666;
    font-size: 14px;
}
.demoney span{
    color:#36d9d6;
}
.detailsShow{
    height: 34px;
    line-height: 34px;
    text-align: right;
    color:#666;
}

.staff,.gender,.detailsMap,.detailweek{
    display: block;
    height: 26px;
    width: 26px;
    background: url(../../assets/PartIndex/taskdetails.png) no-repeat -35px center;
    background-size: 1500%;
}
.gender{
    background: url(../../assets/PartIndex/taskdetails.png) no-repeat -192px center;
       background-size: 1500%;
}
.detailsMap{
     background: url(../../assets/PartIndex/taskdetails.png) no-repeat -62px center;
        background-size: 1500%;
}
.detailweek{
     background: url(../../assets/PartIndex/taskdetails.png) no-repeat -117px center;
        background-size: 1500%;
}
.stafftxt,.gendertxt,.qu,.weektxt{
    width: 100%;
    height: 26px;
    text-indent: 2px;
    line-height: 26px;
    color: #666;
    font-size: 14px;

}
.bian{
    margin: 1px 0 1px 0;
    background: #fff;
}
.si{
    background: #fff;
    height: 54px;
    margin-bottom: 4px;
}
.degongimg{
    margin-top: 9px;
}
.detailsgong{
    font-size: 14px;
    color:#666;
    letter-spacing: 1px;
    font-weight: bold;
    margin-top: 4px;
}
.isCert{
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color:#fff;
    border-radius: 2px;
    display: inline-block;
    margin-top: 4px;
    background: #ffdd00;
}
.team{
     width: 90px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 2px;
    display: inline-block;
    color:#666;
}
.aarr{
  padding: 12px 0 0 12px;
}
.qin{
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #36d9d6 url(../../assets/PartIndex/taskdetails.png) no-repeat -212px  center;
    background-size:1132%; 
}
.dephone{
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #36d9d6 url(../../assets/PartIndex/taskdetails.png) no-repeat -240px  center;
    background-size:1132%;
}
.partdet{
    background: #fff;
    margin-bottom: 1px;
    padding: 6px 0;
}
.dettxt{
    line-height: 34px;
    font-size: 18px;
    font-weight: 700;
    color:#36d9d6;
}
.detai{
    padding-top: 8px;
    height: 34px;
    font-size: 14px;
    color:#666;
    font-weight: bold;
}
.detai span{
    font-weight: normal;
    color:12px;
    color:#999;
    text-indent: 2px;
}
.xi{
    background: #fff;
    border-bottom: 4px solid #f5f5f5;
}
.warntxt{
    height: 39px;
    border:1px solid #36d9d6;
    border-radius: 8px;
    color:#36d9d6;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 2px 0 2px 4px;

}
.tel{
    color:#36d9d6;
    border-top: 1px solid #f5f5f5;
    font-size: 16px;
    margin-top: 4px;
    padding-top: 4px;
}
.prompt{
    color:#999;
    font-size: 14px;
    padding-top: 4px;
    margin-bottom: 1.2rem;
}
.subser{
    width: 100%;
    height: 40px;
    background: #36d9d6;
    border-radius: 2px;
    margin-bottom:10px; 
}
.subser i{
    display: inline-block;
    width: 44px;
    height: 40px;
    border-radius: 50%;
    background: #36d9d6 url(../../assets/PartIndex/taskdetails.png) no-repeat -242px  8px;
    background-size:800%;
    margin-left: 35%;
}
.subser span{
    display: inline-block;
    text-align: center;
    color:#fff;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    top:-12px;
    left: 4px;
}
.shar{
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-left: 15px;
    border-radius: 2px;
    background: #36d992 url(../../assets/PartBible/share.png) no-repeat 7px 6px;
}
</style>