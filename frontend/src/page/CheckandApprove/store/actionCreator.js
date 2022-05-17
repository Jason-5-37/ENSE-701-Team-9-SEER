import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getList = (data) => ({
    type: constants.GETREQARTICLE,
    data: fromJS(data)
})

export const getReqArticles = () => {
    return (dispatch) => {
        axios.get('http://localhost:8082/api/NotSubmitArticles/').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(getList(data));
        }).catch(() => {
            console.log('error: Can not get List');
        })
    }
}

export const postAticle = (id, title, author, source, DOI, ClaimedBenefit, published_date, LevelofEvidence) => {
    return() => {
        let postdate = {
            "title": title, 
            "author":author, 
            "source":source, 
            "DOI":DOI, 
            "ClaimedBenefit":ClaimedBenefit, 
            "published_date":published_date, 
            "LevelofEvidence":LevelofEvidence
        }
        axios.post('http://localhost:8082/api/articles',postdate).then((res) => {
            console.log(res);
        }).catch(() => {
            console.log('error: Can not post');
        })

        console.log(id);

        axios.delete('http://localhost:8082/api/NotSubmitArticles/'+id).then((res) => {
            console.log(res);
            window.location.href = './CheckandApprove';
        }).catch(() => {
            console.log('error: Can not delete');
        })
    }
}
    