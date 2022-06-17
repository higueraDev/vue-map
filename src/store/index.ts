import { createStore } from "vuex";

// import exampleModule from './module-template';
// import { ExampleStateInterface } from './module-template/state';
// export interface StateInterface {
//   example: unknown;
// }

/* PLACES */
import placesModule from "./places";
import { PlacesState } from "./places/state";
/* MAP */
import mapModule from './map/index';
import { MapState } from './map/state';

export interface StateInterface {
	placesModule: PlacesState;
	mapModule: MapState;
}

export default createStore<StateInterface>({
	modules: {
		placesModule,
		mapModule
	},
});
