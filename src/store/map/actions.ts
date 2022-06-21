import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "..";
import directionsApi from "../../apis/directionsApi";
import { DirectionsResponse } from "../../interfaces/directions";

export type LongLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
	async getRouteBetweenPoints(
		{ commit },
		{ start, end }: { start: LongLat; end: LongLat }
	) {
		const { data } = await directionsApi.get<DirectionsResponse>(
			`${start.join(",")};${end.join(",")}`
		);

		commit('SET_DISTANCE_DURATION', {
			distance: data.routes[0].distance,
			duration: data.routes[0].duration,
		})

		commit("SET_POLYLINE", data.routes[0].geometry.coordinates);
	},
};

export default actions;
