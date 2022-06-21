import { MutationTree } from "vuex";
import { MapState } from "./state";
import Mapboxgl from "mapbox-gl";
import { Feature } from "../../interfaces/places";

const mutations: MutationTree<MapState> = {
	SET_MAP(state, map: Mapboxgl.Map) {
		state.map = map;
	},
	SET_PLACE_MARKERS(state, places: Feature[]) {
		if (!state.map) return;

		state.markers.forEach((marker) => marker.remove());
		state.markers = [];

		for (const place of places) {
			const [long, lat] = place.center;

			const popup = new Mapboxgl.Popup(/* { offset: [0, -15] } */)
				.setLngLat([long, lat])
				.setHTML(`<h4>${place.place_name}</h4> <p>${place.text}</p>`);

			const marker = new Mapboxgl.Marker()
				.setLngLat([long, lat])
				.setPopup(popup)
				.addTo(state.map);

			state.markers.push(marker);
		}

		/* Clear Polyline */
		if (state.map?.getLayer("RouteString")) {
			state.map.removeLayer("RouteString");
			state.map.removeSource("RouteString");
			state.distance = undefined;
			state.duration = undefined;
		}
	},
	SET_POLYLINE(state, coords: number[][]) {
		const [start, end] = coords;
		/* Definir bounds */
		const bounds = new Mapboxgl.LngLatBounds(
			[start[0], start[1]],
			[end[0], end[1]]
		);

		/* Agregar cada punto al bounds*/
		for (const coord of coords) {
			const newCoord: [number, number] = [coord[0], coord[1]];
			bounds.extend(newCoord);
		}
		/* Agregar los bounds al mapa */
		state.map?.fitBounds(bounds, {
			padding: 200,
		});

		/* Polyline */
		const sourceData: Mapboxgl.AnySourceData = {
			type: "geojson",
			data: {
				type: "FeatureCollection",
				features: [
					{
						type: "Feature",
						properties: {},
						geometry: {
							type: "LineString",
							coordinates: coords,
						},
					},
				],
			},
		};

		if (state.map?.getLayer("RouteString")) {
			state.map.removeLayer("RouteString");
			state.map.removeSource("RouteString");
		}

		state.map?.addSource("RouteString", sourceData);

		state.map?.addLayer({
			id: "RouteString",
			type: "line",
			source: "RouteString",
			layout: {
				"line-cap": "round",
				"line-join": "round",
			},
			paint: {
				"line-color": "black",
				"line-width": 3,
			},
		});
	},
	SET_DISTANCE_DURATION(
		state,
		{ distance, duration }: { distance: number; duration: number }
	) {
		let kms = distance / 1000;
		kms = Math.round(kms * 100);
		kms /= 100;

		state.distance = kms;

		state.duration = Math.floor(duration / 60);
	},
};

export default mutations;
