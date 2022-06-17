import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if (!navigator.geolocation) alert('Tu navegador no soporta la Geolocalización')

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlndWVyYWRldiIsImEiOiJjbDRpcWpjem8wMDF5M2tyMWp4a3V5b2VuIn0._Ny8bA5sjEZznaa5w6s-Gg';

createApp(App).use(store).use(router).mount("#app");
