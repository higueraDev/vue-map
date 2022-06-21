import { MutationTree } from "vuex";
import { PlacesState } from "./state";
import { Feature } from "@/interfaces/places";

const mutations: MutationTree<PlacesState> = {
	SET_USER_LOCATION(state: PlacesState, coord: [number, number]) {
		state.userLocation = coord;
		state.isLoading = false;
	},
	SET_LOADING_PLACES(state) {
		state.isLoadingPlaces = true;
	},
	SET_PLACES(state, places: Feature[]) {
		state.places = places;
		state.isLoadingPlaces = false;
	},
};

export default mutations;
