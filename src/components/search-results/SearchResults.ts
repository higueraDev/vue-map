import { defineComponent, ref, watch } from "vue";
import { usePlacesStore } from "@/composables";
import { useMapStore } from "@/composables/useMapStore";
import { Feature } from "@/interfaces/places";

export default defineComponent({
	name: "SearchResults",
	setup() {
		const { places, isLoadingPlaces, userLocation } = usePlacesStore();
		const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
		const activePlace = ref("");

		watch(places, (newPlaces) => {
			activePlace.value = "";
			setPlaceMarkers(newPlaces);
		});

		return {
			places,
			isLoadingPlaces,
			activePlace,
			setActivePlace: (place: Feature) => {
				const [long, lat] = place.center;

				activePlace.value = place.id;

				map.value?.flyTo({
					center: [long, lat],
					zoom: 14,
				});
			},
			setDirections: (place: Feature) => {
				if (!userLocation.value) return;
				
				const [long, lat] = place.center;
				const [startLong, startLat] = userLocation.value;

				const start: [number, number] = [startLong, startLat];
				const end: [number, number] = [long, lat];

				getRouteBetweenPoints(start, end);
			},
		};
	},
});
