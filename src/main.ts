import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import ElementPlus from 'element-plus'  按需引入Element
// import 'element-plus/dist/index.css'  按需引入Element

createApp(App)
.use(router)
// .use(ElementPlus)  按需引入Element
.mount('#app')
