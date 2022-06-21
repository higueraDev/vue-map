<template>
	<button v-if="isButtonReady" @click="onClick" class="btn btn-primary">
		Ir a mi ubicación
	</button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent } from "vue";

export default defineComponent({
	name: "LocationButton",
	setup() {
		const { userLocation, isUserLocationReady } = usePlacesStore();
		const { map, isMap } = useMapStore();
		return {
			isButtonReady: computed(
				() => isUserLocationReady.value && isMap.value
			),
			onClick: () => {
				map.value?.flyTo({
					center: userLocation.value,
					zoom: 14,
				});
			},
		};
	},
});
</script>

<style scoped>
button {
	position: fixed;
	top: 30px;
	right: 30px;
}
</style>
