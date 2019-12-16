import Home from '@/app/base/views/Home.vue'
import About from '@/app/base/views/Home.vue'

const routes :any = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]

export default routes;