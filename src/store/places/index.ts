import { Module } from "vuex";
import { StateInterface } from "..";

import state, {PlacesState} from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const exampleModule: Module<PlacesState, StateInterface> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default exampleModule