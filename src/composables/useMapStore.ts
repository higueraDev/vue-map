import { useStore } from "vuex";
import { computed } from "vue";
import { StateInterface } from "@/store/index";
import Mapboxgl from "mapbox-gl";

export const useMapStore = () => {
	const store = useStore<StateInterface>();

	return {
		/* STATE */
		map: computed(() => store.state.mapModule.map),
		duration: computed(() => store.state.mapModule.duration),
		distance: computed(() => store.state.mapModule.distance),
		/* GETTERS */
		/* MUTATIONS */
		setMap: (map: Mapboxgl.Map) => store.commit("mapModule/SET_MAP", map),
		/* ACTIONS */
	};
};
