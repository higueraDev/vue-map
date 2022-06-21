<template>
	<div v-if="distance" class="trip-container column">
		<div class="col">
			Distancia: <strong>{{ distance }} kms</strong>
		</div>
		<div class="col">
			Duracion: <strong>{{ duration }} mins</strong>
		</div>
	</div>
</template>

<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
	name: "TripDetails",
	setup() {
		const { distance, duration } = useMapStore();
		return { distance, duration };
	},
});
</script>

<style scoped>
.trip-container {
	background-color: white;
	border-radius: 6px;
	bottom: 200px;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	font-size: 22px;
	right: 20px;
	padding: 10px;
	position: fixed;
	min-width: 250px;
}
strong {
	color: #42b983;
}
</style>
