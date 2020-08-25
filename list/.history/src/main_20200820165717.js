// 引入组件
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import MyHttpServer from './plugins/http'
Vue.use(router);


// 引入css文件
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';


//使用插件
Vue.use(ElementUI)
Vue.use(MyHttpServer)
Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')