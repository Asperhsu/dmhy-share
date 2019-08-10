import VueRouter from 'vue-router'

import Home from '@/pages/Home';
import Program from '@/pages/Program';
import Admin from '@/pages/Admin';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/program', name: 'program', component: Program },
    { path: '/admin', name: 'admin', component: Admin },
];

export default new VueRouter({
    routes
});