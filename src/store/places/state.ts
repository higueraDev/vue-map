import { Feature } from '@/interfaces/places';
export interface PlacesState {
	isLoading: boolean;
	userLocation?: [number,number];
	places: Feature[];
	isLoadingPlaces: boolean;
}

function state(): PlacesState {
	return {
		isLoading: true,
		userLocation: undefined,
		places: [],
		isLoadingPlaces: false
	};
}

export default state;
