// 引入组件
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
Vue.use(router);


// 引入css文件
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')