<template>
	<ul v-if="!isLoadingPlaces && places.length > 0" class="list-group mt-3">
		<li
			:class="{ active: activePlace == place.id }"
			:key="place.id"
			@click="setActivePlace(place)"
			class="list-group-item list-group-item-action text-start"
			v-for="place in places"
		>
			<h5>{{ place.place_name }}</h5>
			<p>
				{{ place.text }}
			</p>
			<div>
				<button @click="setDirections(place)" class="btn btn-sm" :class="activePlace == place.id ? 'btn-outline-light' : 'btn-outline-primary'  ">Direcciones</button>
			</div>
		</li>
	</ul>
</template>

<script lang="ts" src="./SearchResults"></script>

<style scoped>
li {
	cursor: pointer;
}
h5 {
	font-size: 16px;
}
p {
	font-size: 14px;
	line-height: 1.4;
}

.list-group {
	overflow-y: auto;
	flex-grow: 1;
}
</style>
