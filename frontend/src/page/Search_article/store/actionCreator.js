import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.GETARTICLE,
    data: data
})

export const getArticles = () => {
    return (dispatch) => {
        axios.get('https://ense-701-team-9-seer.herokuapp.com/api/articles/').then((res) => {
            const data = res.data;
            console.log(data);
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
        axios.post('https://ense-701-team-9-seer.herokuapp.com/api/articles/search_article',postdate).then((res) =>{
            const data = res.data;
            dispatch(changeList(data));
        }).catch(() => {
            console.log('error: Can not get Search List');
        })
    }
}

export const getType = (Type) => {
    return(dispatch) =>{
        if (Type === "All"){
            axios.get('https://ense-701-team-9-seer.herokuapp.com/api/articles/').then((res) => {
                const data = res.data;
                console.log(data);
                dispatch(changeList(data));
            }).catch(() => {
                console.log('error: Can not get List');
            })
        }else{
            let postdate = {
                "type": Type
            }
            axios.post('https://ense-701-team-9-seer.herokuapp.com/api/articles/type', postdate).then((res) => {
                const data = res.data;
                console.log(data);
                dispatch(changeList(data));
            }).catch(() => {
                console.log('error: Can not get List');
            })
        }
    }
}