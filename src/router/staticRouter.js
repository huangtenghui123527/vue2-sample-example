import Layout from "@/layout"

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: true,
    id:"1",
    title:"编辑器",
    children: [
      {
        path: 'home',
        name: 'Home',
        id:"1_1",
        title:"首页",
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    id:"2",
    title:"登录",
    component: () => import('@/views/login')
  }, 
]