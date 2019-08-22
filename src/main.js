import Vue from 'vue';
import VueRouter from 'vue-router';
import { firestorePlugin } from 'vuefire';
import Storage from 'vue-web-storage';
import StorageStore from './services/StorageStore';
import router from './router.js';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.use(Storage);
Vue.use(StorageStore);

Vue.prototype.$eventHub = new Vue();

new Vue({
    router,
    StorageStore: true,
    render: h => h(App),
}).$mount('#app')
