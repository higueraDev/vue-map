import { useStore } from "vuex";
import { StateInterface } from "@/store/index";
import { computed, onMounted } from "vue";

export const usePlacesStore = () => {
	const store = useStore<StateInterface>();

	onMounted(() => {
		if (!store.getters["placesModule/isUserLocationReady"])
			store.dispatch("placesModule/getInitialPosition");
	});

	return {
		/* STATE */
		isLoading: computed(() => store.state.placesModule.isLoading),
		userLocation: computed(() => store.state.placesModule.userLocation),
		/* GETTERS */
		isUserLocationReady: computed<boolean>(()=> store.getters['placesModule/isUserLocationReady'])
		/* MUTATIONS */
		/* ACTIONS */
	};
};

export default usePlacesStore;
