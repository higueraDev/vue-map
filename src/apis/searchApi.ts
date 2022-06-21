import axios from "axios";

const searchApi = axios.create({
	baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
	params: {
		limit: 5,
		language: "es",
		access_token:
			"pk.eyJ1IjoiaGlndWVyYWRldiIsImEiOiJjbDRpcWpjem8wMDF5M2tyMWp4a3V5b2VuIn0._Ny8bA5sjEZznaa5w6s-Gg",
	},
});

export default searchApi;