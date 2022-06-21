<template>
	<div class="searchbar-container">
		<input
			class="form-control"
			type="text"
			placeholder="Buscar lugares..."
			v-model="searchTerm"
		/>
		<span
			v-if="isLoadingPlaces"
			class="loader position-absolute spinner-border text-primary"
			role="status"
		></span>
		<search-results></search-results>
	</div>
</template>

<script lang="ts" src="./SearchBar"></script>

<style scoped>
.searchbar-container {
	position: fixed;
	top: 30px;
	left: 30px;
	display: flex;
	flex-direction: column;
	background-color: white;
	z-index: 999;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	width: 250px;
	border-radius: 5px;
	overflow: hidden;
	max-height: calc(100% - 60px);
	padding: 5px;
}
.loader {
	width: 25px;
	height: 25px;
	right: 0px;
	top: 0;
	bottom: 0;
	margin: auto;
	margin-right: 8px;
	background-color: white;
}
</style>
