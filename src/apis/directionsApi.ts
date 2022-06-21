import axios from "axios";

const directionsApi = axios.create({
	baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
	params: {
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
		access_token:
			"pk.eyJ1IjoiaGlndWVyYWRldiIsImEiOiJjbDRpcWpjem8wMDF5M2tyMWp4a3V5b2VuIn0._Ny8bA5sjEZznaa5w6s-Gg",
	},
});

export default directionsApi;