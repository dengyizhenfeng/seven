import Vue from 'vue'
import Router from 'vue-router'
import UserElement from '@/components/userElement/userElement.vue'
import Login from '@/components/login/login.vue'
import LoginDefault from '../components/login/login-default.vue'
import LoginZhaohui from '../components/login/login-zhaohui.vue'
import LoginZhaohuiS from '../components/login/login-zhaohuiS.vue'
import NewPassword from '../components/login/login-newpassword.vue'
import YanZheng from '@/components/yanzheng/yanzheng.vue'
import Home from '@/components/home/home.vue'
import HomePage from '@/components/home/home-page/home-page.vue'
// 考勤
import Attendance from '@/components/home/attendance/attendance.vue'
import AttendanceHome from '@/components/home/attendance/attendance-home/attendance-home.vue'
import AddAttendance from '@/components/home/attendance/addAttendance/addAttendance.vue'
// 审批
import Approval from '@/components/home/approval/approval.vue'
import ApprovalList from '@/components/home/approval/approval-list/approval-list.vue'
import ApprovalSetting from '@/components/home/approval/approval-setting/approval-setting.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home/page'},
    // {path: '/userElement', component: UserElement},
    {
      name: 'login',
      path: '/login',
      component: Login,
      redirect: '/login/default',
      children: [
        {path: 'default', component: LoginDefault},
        {path: 'zhaohui', component: LoginZhaohui},
        {path: 'zhaohuis', component: LoginZhaohuiS},
        {path: 'newpassword', component: NewPassword}
      ]
    },
    {path: '/yanzheng', component: YanZheng},
    {
      name: 'home',  //home根目录
      path: '/home',
      component: Home,
      redirect: '/home/page',
      children: [
        {path: 'page', component: HomePage}, // 整个后台home，默认是首页/home/page
        {
          name: 'attendance',
          path: '/attendance',  //考勤，路径是/attendance,默认显示/attendance/home
          component: Attendance,
          redirect: '/attendance/home',
          children: [
            {path: 'home', component: AttendanceHome}, //默认考勤显示的是这个
            {path: 'addAttendance', component: AddAttendance} //添加考勤，路径/attendance/addAttendance
          ]
        },
        {
          name: 'approval',
          path: '/approval',
          component: Approval,  //审批
          children: [
            {path: 'approval-list', component: ApprovalList}, // 审批列表
            {path: 'approval-setting', component: ApprovalSetting} // 审批设置
          ]
        }
      ]
    }
  ]
})
