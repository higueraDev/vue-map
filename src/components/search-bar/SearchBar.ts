import { defineComponent, ref, computed } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import usePlacesStore from "../../composables/usePlacesStore";
export default defineComponent({
	name: "SearchBar",
	components: { SearchResults },
	setup() {
		const debounceTimeOut = ref();
		const debounceValue = ref("");
		const { searchPlacesByTerm, isLoadingPlaces } = usePlacesStore();

		return {
			debounceValue,
			isLoadingPlaces,
			searchTerm: computed({
				get() {
					return debounceValue.value;
				},
				set(val: string) {
					if (debounceTimeOut.value)
						clearTimeout(debounceTimeOut.value);
					debounceTimeOut.value = setTimeout(() => {
						debounceValue.value = val;
						searchPlacesByTerm(val);
					}, 500);
				},
			}),
		};
	},
});
