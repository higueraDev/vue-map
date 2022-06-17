import { GetterTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "..";

const getters: GetterTree<MapState, StateInterface> = {
    isMap(state){
        return !!state.map
    }
}

export default getters;