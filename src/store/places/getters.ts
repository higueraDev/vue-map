import { GetterTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "..";

const getters: GetterTree<PlacesState, StateInterface> = {
    isUserLocationReady(state){
        return !!state.userLocation
    }
}

export default getters;