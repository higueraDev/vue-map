import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "..";
import searchApi from "@/apis/searchApi";
import { Feature, PlacesResponse } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
	getInitialPosition({ commit }) {
		navigator.geolocation.getCurrentPosition(({ coords }) =>
			commit("SET_USER_LOCATION", [coords.longitude, coords.latitude])
		),
			console.log;
	},

	async searchPlacesByTerm(
		{ commit, state },
		query: string
	): Promise<Feature[]> {

		commit("SET_PLACES", []);

		if (query.length === 0) return [];
		if (!state.userLocation)
			throw new Error("No hay ubicación del usuario");

		commit("SET_LOADING_PLACES");

		const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
			params: {
				proximity: state.userLocation?.join(","),
			},
		});

		commit("SET_PLACES", data.features);
		
		return data.features;
	},
};

export default actions;
