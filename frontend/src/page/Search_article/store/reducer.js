import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    list: [],
    SearchInput: '',
    State: false
});


const Searchstate = (state = defaultState, action) => {
    switch (action.type) {
        case constants.GETARTICLE:
            return state.set('list', action.data);
        case constants.GETSEACHINPUT:
            return state.set('SearchInput', action.Searchinput);
        case constants.SHOWSTATE:
            return state.set('State', action.value);
        default:
            return state;
    }
}

export default Searchstate;