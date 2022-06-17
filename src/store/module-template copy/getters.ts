import { GetterTree } from "vuex";
import { ExampleStateInterface } from "./state";
import { StateInterface } from "..";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
    someGetter(/* state: ExampleStateInterface */){
        /*  */ 
    }
}

export default getters;