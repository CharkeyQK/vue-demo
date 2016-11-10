import Vue from 'vue'
import Vuex from 'vuex'
import actions from './category-actions'
import * as getters from './category-getters'
import categoryState from './category-state'
import * as types from './category-mutation-types'
Vue.use(Vuex);

export default new Vuex.Store({
    actions:actions,
    getters,
    modules: {
      categoryState
    }
});

