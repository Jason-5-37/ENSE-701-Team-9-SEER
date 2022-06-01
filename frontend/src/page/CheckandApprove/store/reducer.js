import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    Approvelist:[],
    list:[]
});


const ApproveState = (state = defaultState, action) => {
    switch(action.type) {
        case constants.GETREQARTICLE:
            return state.set('Approvelist',action.data);
        case constants.GETLIST:
                return state.set('list',action.data);
        default:
            return state;
    }
}

export default ApproveState;