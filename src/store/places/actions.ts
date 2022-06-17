import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "..";

const actions: ActionTree<PlacesState, StateInterface> = {
	getInitialPosition({ commit }) {
		//todo: colocar loading
		navigator.geolocation.getCurrentPosition(({ coords }) =>
			commit("setLanguageLat", [coords.longitude, coords.latitude])
		),
			console.log;
	},
};

export default actions;
