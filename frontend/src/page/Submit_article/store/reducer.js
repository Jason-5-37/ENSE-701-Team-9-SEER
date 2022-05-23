import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    post: false
});


const submitstate = (state = defaultState, action) => {
    switch (action.type) {
        case constants.POSTREQEST:
            return state.set('post', true);
        default:
            return state;
    }
}

export default submitstate;