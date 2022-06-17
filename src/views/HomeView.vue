<template>
	<div class="home">
		<map-view></map-view>
	</div>
</template>

<script lang="ts">
import { usePlacesStore } from "@/composables";
import { defineComponent } from "vue";
import MapView from "@/components/mapview/MapView.vue";

export default defineComponent({
	name: "HomeView",
	components: { MapView },
	setup() {
		usePlacesStore();
		return {};
	},
});
</script>
