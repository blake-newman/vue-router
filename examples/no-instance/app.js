import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Create the router
// If not mouting the router at runtime you can still invoke router methods
// Route gaurds will still take effect
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/foo',
      component: {
        template: '<div>foo</div>'
      }
    },
    {
      path: '/bar',
      component (resolve) {
        Vue.nextTick(() => {
          resolve({
            template: '<div>{{ val }}</div>',
            data () {
              return {
                val: ''
              }
            },
            beforeRouteEnter (to, from, next) {
              next((vm) => {
                vm.val = 'bar'
              })
            }
          })
        })
      }
    }
  ]
})

// 3. Use router methods
// You can use router methods prior to instantiation of Vue instance
const locationEl = document.querySelector('.location')
window.handler = (val) => {
  if (val === 1) {
    router.replace('/foo')
  } else if (val === 2) {
    router.push('/bar')
  } else if (val === 3) {
    router.back()
  } else if (val === 4) {
    router.forward()
  } else if (val === 5) {
    router.go(-1)
  }
  setTimeout(() => {
    locationEl.innerHTML = window.location.pathname
  })
}

// 4. You can mount the router to a Vue instance at any point
window.mount = () => {
  new Vue({
    router,
    template: '<router-view id="mount"/>'
  }).$mount('#mount')
}
