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

export const getSearchResult = (Searchinput) =>{
    return(dispatch) =>{
        let postdate = {
            "title": Searchinput
        }
        axios.post('http://localhost:8082/api/articles/search_article',postdate).then((res) =>{
            const data = res.data;
            dispatch(changeList(data));
        }).catch(() => {
            console.log('error: Can not get Search List');
        })
    }
}