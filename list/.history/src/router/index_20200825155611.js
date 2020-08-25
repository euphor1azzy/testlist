import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login/login.vue'
import Users from '../components/users/users.vue'



Vue.use(Router);



export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                name: 'Users',
                path: 'users',
                component: Users
            }]

        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        }
    ]
});