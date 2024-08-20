import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [

    {
      path: '*',//错误页面
      name: 'error',
      component: ()=>import("@/components/admin/Page404")
    },
    {
      path: '/',//商城首页
      name: 'index',
      component: ()=>import("@/components/demo/Index")
    },
    {
      path: '/login',//商城登录
      name: 'login',
      component: ()=>import("@/components/demo/Login")
    },
    {
      path: '/register',//商城注册
      name: 'register',
      component: ()=>import("@/components/demo/Register")
    },
    {
      path: '/productClass',//商品分类
      name: 'productClass',
      component: ()=>import("@/components/demo/ProductClass")
    },
    {
      path: '/productDetail',//商品详情
      name: 'productDetail',
      component: ()=>import("@/components/demo/productDetail")
    },
    {
      path: '/buyCar',//购物车1
      name: 'buyCar',
      component: ()=>import("@/components/demo/BuyCar")
    },
    {
      path: '/buyCarTwo',//购物车2-确认订单
      name: 'buyCarTwo',
      component: ()=>import("@/components/demo/BuyCar_two")
    },
    {
      path: '/buyCarThree',//购物车3-成功提交订单
      name: 'buyCarThree',
      component: ()=>import("@/components/demo/BuyCar_three")
    },
    {
      path: '/member',//会员信息
      name: 'member',
      component: ()=>import("@/components/demo/Member"),
      children:[
        {
          path: 'user',//用户信息
          name: 'user',
          component: ()=>import("@/components/demo/MemberUser")
        },
        {
          path: 'order',//我的订单
          name: 'order',
          component: ()=>import("@/components/demo/MemberOrder")
        },
        {
          path: 'collection',//我的收藏
          name: 'collection',
          component: ()=>import("@/components/demo/MemberCollection")
        },
        {
          path: 'address',//收货地址
          name: 'address',
          component: ()=>import("@/components/demo/MemberAddress")
        },
        {
          path: 'safe',//账号安全
          name: 'safe',
          component: ()=>import("@/components/demo/MemberSafe")
        }

      ]
    },
/*-----------------------------分割线---------------------------------------*/
    {
      path: '/admin/login',//商城后台登录
      name: 'admin_login',
      component: ()=>import("@/components/admin/Login")
    },
    {
      path: '/admin/index',//商城后台主页
      name: 'admin_index',
      component: ()=>import("@/components/admin/Index"),
      children:[
        {
          path: 'default',//商城后台首页
          name: 'default',
          component: ()=>import("@/components/admin/Default")
        },
        {
          path: 'list',//商城后台列表
          name: 'list',
          component: ()=>import("@/components/admin/List")
        },
      ]
    },

  ]
})
