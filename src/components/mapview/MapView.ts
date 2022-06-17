import { defineComponent, ref, onMounted, watch } from "vue";
import Mapboxgl from "mapbox-gl";
import { usePlacesStore, useMapStore } from "@/composables";

export default defineComponent({
	name: "MapView",
	setup() {
		const mapElement = ref<HTMLDivElement>();
		const { userLocation, isUserLocationReady } = usePlacesStore();
		const { setMap } = useMapStore();

		const initMap = async () => {
			if (!mapElement.value)
				throw new Error("Div contenedor no encontrado");
			if (!userLocation.value)
				throw new Error("No se encontró la posición del usuario");

			await Promise.resolve();

			const map = new Mapboxgl.Map({
				container: mapElement.value, // container ID
				style: "mapbox://styles/mapbox/streets-v11", // style URL
				center: userLocation.value, // starting position [lng, lat]
				zoom: 15, // starting zoom
			});

			const myLocationPopup =
				new Mapboxgl.Popup(/* { offset: [0, -15] } */)
					.setLngLat(userLocation.value)
					.setHTML(
						`<h4>Aquí estoy</h4> <p>Actualmente en La Paz</p> <p>${userLocation.value}</p>`
					);

			const myLocationMarker = new Mapboxgl.Marker()
				.setLngLat(userLocation.value)
				.setPopup(myLocationPopup)
				.addTo(map);

			setMap(map);
		};

		onMounted(() => {
			if (isUserLocationReady.value) return initMap();

			console.log("Aún no se encuentran los datos de ubicación");
		});

		watch(isUserLocationReady, () => {
			if (isUserLocationReady.value) return initMap();
		});

		return {
			isUserLocationReady,
			mapElement,
		};
	},
});
