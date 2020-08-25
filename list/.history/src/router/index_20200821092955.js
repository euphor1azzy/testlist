import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login/login.vue'



Vue.use(Router);



export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home

        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        }
    ]
});