<template>
	<div class="home">
		<map-view></map-view>
		<location-button></location-button>
		<search-bar></search-bar>
		<trip-details></trip-details>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MapView from "@/components/mapview/MapView.vue";
import LocationButton from "@/components/location-button/LocationButton.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import TripDetails from "@/components/trip-details/TripDetails.vue";

export default defineComponent({
	name: "HomeView",
	components: { MapView, LocationButton, SearchBar, TripDetails },
});
</script>
