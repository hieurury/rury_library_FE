import { 
    createWebHistory, 
    createRouter 
}                               from "vue-router";
//layouts
import MainLayout               from '../layouts/MainLayout.vue';
import NoneLayout               from "../layouts/NoneLayout.vue";
//views
import HomeView                 from '../views/HomeView.vue'
import LoginView                from '../views/LoginView.vue'
import RegisterView             from '../views/RegisterView.vue'


const router = [
    {
        path: '/',
        name: 'Base',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomeView
            }
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        component: NoneLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: LoginView
            },
            {
                path: '/register',
                name: 'Register',
                component: RegisterView
            }
        ]
    }
]


const routes = createRouter({
    history: createWebHistory(),
    routes: router
})

export default routes;