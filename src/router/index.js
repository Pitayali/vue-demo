import Vue from 'vue';
import VueRouter from 'vue-router';
import moduleRouters from '@/module/router.js'
import Main from '@/components/main/main.vue'
import Login from '@/components/login/login.vue'

// const NotFound = resolve => require(['@/components/login/404.vue'], resolve);
// const Unauthorized = resolve => require(['@/components/login/401.vue'], resolve);
Vue.use(VueRouter);

const router = [{
    path: '/',
    component: Main,
    redirect: '/login',
    children: [
        { path: '/login', name: 'login', component: Login },
    ]
},

// {
//     path: '/404',
//     name: '404',
//     component: NotFound,
// },
// {
//     path: '/401',
//     name: '401',
//     component: Unauthorized,
// },
// ...generateRoutesFromModules(),
    // {
    //     path: '*',
    //     redirect: '/404'
    // }
];

function generateRoutesFromModules() {
    return moduleRouters;
}



export default router;