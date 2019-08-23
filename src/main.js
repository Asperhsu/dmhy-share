import Vue from 'vue';
import VueRouter from 'vue-router';
import { firestorePlugin } from 'vuefire';
import vuejsStorage from 'vuejs-storage'
import router from './router.js';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.use(vuejsStorage);

Vue.prototype.$eventHub = new Vue();

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
