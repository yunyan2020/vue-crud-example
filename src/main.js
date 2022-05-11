import { createApp } from 'vue'

import store from './store.js'
import App from './App.vue'
import router from './router/index.js'
import Vuex from 'vuex'
import {create,NButton} from 'naive-ui'

const naive = create({
  components: [NButton]
})

createApp(App).use(router).use(store).use(Vuex).use(naive).mount('#app')