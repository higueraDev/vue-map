import { Module } from "vuex";
import { StateInterface } from "..";

import state, {MapState} from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const mapModule: Module<MapState, StateInterface> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default mapModule