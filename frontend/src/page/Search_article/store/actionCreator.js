import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.GETARTICLE,
    data: fromJS(data)
})

export const getArticles = () => {
    return (dispatch) => {
        axios.get('http://localhost:8082/api/articles/').then((res) => {
            const data = res.data;
            dispatch(changeList(data));
        }).catch(() => {
            console.log('error: Can not get List');
        })
    }
}

const SearchInput = (Searchinput) => ({
    type: constants.GETSEACHINPUT,
    Searchinput
})

const ShowState = () => ({
    type: constants.SHOWSTATE,
    value:true
})

export const getSearchinput = (Searchinput) =>{
    return(dispatch) =>{
        console.log(Searchinput);
        dispatch(ShowState());
        dispatch(SearchInput(Searchinput));
    }
}