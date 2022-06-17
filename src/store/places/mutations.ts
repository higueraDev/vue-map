import { MutationTree } from "vuex";
import { PlacesState } from "./state";

const mutations: MutationTree<PlacesState> = {
	setLanguageLat(state: PlacesState, coord: [number, number]) {

        console.log(coord)
		state.userLocation = coord;
		state.isLoading = false;
	},
};

export default mutations;
