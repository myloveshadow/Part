import Vue from 'vue'
import Router from 'vue-router'
import show from '@/components/show'
import notFound from '@/components/notFound'
import Login from '@/components/Login/Login' //登陆
import Success from '@/components/Login/Success' //注册
import PartIndex from '@/components/PartIndex/index'  //首页
import PartIndexMap from '@/components/PartIndex/PartIndexMap';
import hotPartjob from '@/components/PartIndex/hotPart/hotPart';  //热门兼职
import newPartjob from '@/components/PartIndex/hotPart/newPart';  //最新兼职
import redressPartjob from '@/components/PartIndex/hotPart/redressPart'  //附近兼职
import weekPartjob from '@/components/PartIndex/hotPart/dayPart'  //周末兼职
import PartTask from '@/components/PartIndex/DoorTask/Parttask' //门任务
import PartMyTask from '@/components/PartIndex/DoorTask/MyTask' //我的任务
import TaskState from '@/components/PartIndex/DoorTask/taskState';  //任务详情
import IndexHurry from '@/components/PartIndex/PartIndexHurry';  //急招专场
import Detail from '@/components/PartIndex/PartIndexDetails'  //兼职详情
import FindInternship from '@/components/PartIndex/FindInternship/FindInternship'  //找实习
//import PartMyTask02 from '@/components/PartIndex/DoorTask/2'
import test from '@/components/PartIndex/hotPart/test' //测试
//import newhotPart from '@/components/PartIndex/newhotPart'  //继续测试,功能效果好，可以转正 pass 
import Bible from '@/components/Bible/Bible' //宝典
import PartMessage from  '@/components/PartMessage/PartMessage'  //消息
import FriendMessage from '@/components/PartMessage/FriendDetails'  //个人资料
import PartMy from '@/components/PartMy/PartMy'  //我的
import PartMySignUp from '@/components/PartMy/PartMytoSignUp'  //报名
import toMycollection from '@/components/PartMy/toMycollection' //我的收藏
import PartMyonFouces from '@/components/PartMy/PartMyonFouces'  //关注
import PartMyFeedback from '@/components/PartMy/PartMyFeedback' //意见反馈
import PartMySetting from '@/components/PartMy/PartMySetting' //设置
import BibleDetail from '@/components/Bible/Detail'  //宝典详情
import PartMyResume from '@/components/PartMy/PartMyResume' //我的简历
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [  
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/test',
      component:test
    },
    {
      path:'/index',
      component:PartIndex
    },
    {
      path:'/details',
      component:Detail
    },
    {
      path:'/index/map',
      component:PartIndexMap
    },
    {
      path:'/index/hurry',
      component:IndexHurry
    },
    {
      path:'/index/task',
      component:PartTask
    },
    {
      path:'/index/task/mytask/:state',
      component:PartMyTask
    },
    {
      path:'/index/task/detail',
       component:TaskState
    },
    {
      path:'/index/hotpart',
      component:hotPartjob
    },
    {
      path:'/index/newpart',
      component:newPartjob,
    },
    {
      path:'/index/redress',
      component:redressPartjob
    },
    {
      path:'/index/weekpart',
      component:weekPartjob
    },
    {
      path:'/index/internship',
      component:FindInternship
    },
    {
      path:'/success',
      component:Success
    },
    {
      path:'/bible',
      component:Bible
    },
    {
      path:'/bible/detail',
      component:BibleDetail
    },
    {
      path:'/message',
      component:PartMessage
    },
    {
      path:'/message/del',
      component:FriendMessage
    },
    {
      path:'/my',
      component:PartMy
    },
    {
      path:'/my/resume',
      component:PartMyResume
    },
    {
      path:'/my/toSignUp',
      component:PartMySignUp
    },
    {
      path:'/my/toMycollection',
      component:toMycollection
    },
    {
      path:'/my/feedback',
      component:PartMyFeedback
    },
    {
      path:'/my/onFouces',
      component:PartMyonFouces
    },
    {
      path:'/my/setting',
      component:PartMySetting
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'*',
      component:notFound
    }
  ]
})
