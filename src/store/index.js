import Vue from 'vue';
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import state from './state';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    key: 'dmhy-share',
    storage: window.localStorage,
    reducer: (state) => ({
        autoClose: state.autoClose,
        activeSession: state.activeSession,
        showHiddenProgram: state.showHiddenProgram,
        userRemovedProgramIds: state.userRemovedProgramIds,
        userPrograms: state.userPrograms,
    }),
});

export default new Vuex.Store({
    state,
    getters,
    mutations,

    strict: true,
    plugins: [vuexLocal.plugin],
})