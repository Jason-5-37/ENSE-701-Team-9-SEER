import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    list:[]
});


const Searchstate = (state = defaultState, action) => {
    switch(action.type) {
        case constants.GETARTICLE:
            return state.set('list',action.data);

        default:
            return state;
    }
}

export default Searchstate;