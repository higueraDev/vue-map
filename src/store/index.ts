import { createStore } from "vuex";

// import exampleModule from './module-template';
// import { ExampleStateInterface } from './module-template/state';
// export interface StateInterface {
//   example: unknown;
// }
import placesModule from "./places";
import { PlacesState } from "./places/state";

export interface StateInterface {
	placesModule: PlacesState;
}

export default createStore<StateInterface>({
	modules: {
		placesModule,
	},
});
