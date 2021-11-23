import Vue from 'vue'
import VueRouter from 'vue-router'


/* Layouts */
const VerticleLayout = () => import('../layouts/VerticleLayout.vue')
// const Default = () => import('../layouts/BlankLayout.vue')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout.vue')
const HorizantalLayout = () => import('../layouts/HorizantalLayout.vue')

/* Dashboards View */
const Dashboard1 = () => import('../views/Dashboards/Dashboard1.vue')
const Dashboard2 = () => import('../views/Dashboards/Dashboard2.vue')
const Dashboard3 = () => import('../views/Dashboards/Dashboard3.vue')
const Dashboard4 = () => import('../views/Dashboards/Dashboard4.vue')
const Dashboard5 = () => import('../views/Dashboards/Dashboard5.vue')
const Dashboard6 = () => import('../views/Dashboards/Dashboard6.vue')

/* Authentic View */
const SignIn1 = () => import('../views/AuthPages/Default/SignIn1.vue')
const SignUp1 = () => import('../views/AuthPages/Default/SignUp1.vue')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1.vue')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1.vue')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1.vue')


Vue.use(VueRouter)


const horizontalRoute = (prop) => [
    {
      path: 'home-3',
      name: prop + '.home-3',
      meta: { auth: true, name: 'Home 3', layout: 'nav-with-menu' },
      component: Dashboard3
    },
    {
      path: 'home-4',
      name: prop + '.home-4',
      meta: { auth: true, name: 'Home 4', layout: 'nav-bottom-menu' },
      component: Dashboard4
    }
  ]
  const childRoutes = (prop) => [
    {
      path: 'home-1',
      name: prop + '.home-1',
      meta: { auth: true, name: 'Home 1', layout: 'mini-sidebar-right-fix' },
      component: Dashboard1
    },
    {
      path: 'home-2',
      name: prop + '.home-2',
      meta: { auth: true, name: 'Home 2' },
      component: Dashboard4
    },
    {
      path: 'home-5',
      name: prop + '.home-5',
      meta: { auth: true, name: 'Home 5', layout: 'two-sidebar' },
      component: Dashboard3
    },
    {
      path: 'home-6',
      name: prop + '.home-6',
      meta: { auth: true, name: 'Home 6', layout: 'icon-with-text' },
      component: Dashboard4
    }
  ]
  const authChildRoutes = (prop) => [
    {
      path: 'sign-in1',
      name: prop + '.sign-in1',
      meta: { auth: true },
      component: SignIn1
    },
    {
      path: 'sign-up1',
      name: prop + '.sign-up1',
      meta: { auth: true },
      component: SignUp1
    },
    {
      path: 'password-reset1',
      name: prop + '.password-reset1',
      meta: { auth: true },
      component: RecoverPassword1
    },
    {
      path: 'lock-screen1',
      name: prop + '.lock-screen1',
      meta: { auth: true },
      component: LockScreen1
    },
    {
      path: 'confirm-mail1',
      name: prop + '.confirm-mail1',
      meta: { auth: true },
      component: ConfirmMail1
    }
  ]
  
  const routes = [
    {
      path: '/',
      name: 'dashboard',
      component: VerticleLayout,
      meta: { auth: true },
      children: childRoutes('home-1')
    },
    {
      path: '/menu-design',
      name: 'horizontal-dashboard',
      component: HorizantalLayout,
      meta: { auth: true },
      children: horizontalRoute('dashboard')
    },
    {
        path: '/auth',
        name: 'auth1',
        component: AuthLayout,
        meta: { auth: true },
        children: authChildRoutes('auth1')
      },
    
  ]  

  const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.VITE_SENTRY_DSN_INDEX,
    routes,
  })

  router.beforeEach((to, from, next) => {
    console.log("TOOOO",to.name)
    const publicPages = ['/auth/sign-in1', '/auth/sign-up1', '/dark/auth/sign-in1', '/dark/auth/sign-up1']
    if (publicPages.includes(to.path)) {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
    }
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')
    if (to.meta.auth) {
      if (authRequired && loggedIn === null) {
        return next('/auth/sign-in1')
        //return next('/home-1')
      } else if (to.name === 'dashboard' || to.name === 'mini.dashboard'|| to.name === 'dashboard.home-1') {
        return next('/home-1')
      }
    }
    next()
  })
  
  export default router