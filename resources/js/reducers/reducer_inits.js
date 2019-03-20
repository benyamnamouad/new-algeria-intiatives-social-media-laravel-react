import {FETCH_INITS} from "../actions/index";
import {FETCH_INITS_COUNT} from "../actions/index";

const  INITIAL_STATE = {all:[],count:0};

export default function (state=INITIAL_STATE,action) {

    switch (action.type) {

        case FETCH_INITS:
            return {...state, all:action.payload.data};
        case FETCH_INITS_COUNT:
            return {...state, count:action.payload.data};

        default :
            return state;
    }

}
