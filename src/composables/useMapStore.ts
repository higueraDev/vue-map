import { useStore } from "vuex";
import { computed } from "vue";
import { StateInterface } from "@/store/index";
import Mapboxgl from "mapbox-gl";
import { Feature } from "../interfaces/places";
import { LongLat } from "../store/map/actions";

export const useMapStore = () => {
	const store = useStore<StateInterface>();

	return {
		/* STATE */
		map: computed(() => store.state.mapModule.map),
		duration: computed(() => store.state.mapModule.duration),
		distance: computed(() => store.state.mapModule.distance),
		/* GETTERS */
		isMap: computed<boolean>(() => store.getters["mapModule/isMap"]),
		/* MUTATIONS */
		setMap: (map: Mapboxgl.Map) => store.commit("mapModule/SET_MAP", map),
		setPlaceMarkers: (places: Feature[]) =>
			store.commit("mapModule/SET_PLACE_MARKERS", places),
		/* ACTIONS */
		getRouteBetweenPoints: (start: LongLat, end: LongLat) =>
			store.dispatch("mapModule/getRouteBetweenPoints", { start, end }),
	};
};
