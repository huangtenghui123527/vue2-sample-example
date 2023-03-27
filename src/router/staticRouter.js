import Layout from "@/layout"

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/richTxt',
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
      },
      {
        path: 'richTxt',
        name: 'RichTxt',
        id:"1_2",
        title:"富文本编辑器",
        component: () => import('@/views/richTxt')
      },
      {
        path: 'selectInput',
        name: 'SelectInput',
        id:"1_3",
        title:"选择输入编辑",
        component: () => import('@/views/selectInput')
      },
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