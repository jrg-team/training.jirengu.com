import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

Vue.use({
  install(V) {
    V.prototype.$cdn = (path = '') => {
      if (path === '') {
        return undefined
      }
      let host = process.env.NODE_ENV === 'development' ? 'pre-cdn.hunger-valley.com' : 'static.xiedaimala.com'
      return /^(https?:)?\/\//.test(path) ? path : `//${host}/${path}`
    }
  }
})

export default Vue
