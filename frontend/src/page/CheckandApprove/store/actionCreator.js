import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getList = (data) => ({
    type: constants.GETREQARTICLE,
    data: fromJS(data)
})

export const getReqArticles = () => {
    return (dispatch) => {
        axios.get('https://ense-701-team-9-seer.herokuapp.com/api/NotSubmitArticles/').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(getList(data));
        }).catch(() => {
            console.log('error: Can not get List');
        })
    }
}

export const postAticle = (id, title, author, source, DOI, ClaimedBenefit, published_date, LevelofEvidence, type) => {
    return() => {
        let postdate = {
            "title": title, 
            "author":author, 
            "source":source, 
            "DOI":DOI, 
            "ClaimedBenefit":ClaimedBenefit, 
            "published_date":published_date, 
            "LevelofEvidence":LevelofEvidence,
            "type":type
        }
        axios.post('https://ense-701-team-9-seer.herokuapp.com/api/articles',postdate).then((res) => {
            console.log(res);
        }).catch(() => {
            console.log('error: Can not post');
        })

        console.log(id);

        axios.delete('https://ense-701-team-9-seer.herokuapp.com/api/NotSubmitArticles/'+id).then((res) => {
            console.log(res);
            
        }).catch(() => {
            console.log('error: Can not delete');
        })
    }
}

export const DeleteAticle = (id) => {
    return (dispatch) => {
        axios.delete('https://ense-701-team-9-seer.herokuapp.com/api/NotSubmitArticles/'+id).then((res) => {
            window.location.href = './CheckandApprove';
        }).catch(() => {
            console.log('error: Can not get List');
        })
    }
}

const getApproveList = (data) => ({
    type: constants.GETLIST,
    data: fromJS(data)
})

export const getArticles = () => {
    return (dispatch) => {
        axios.get('https://ense-701-team-9-seer.herokuapp.com/api/articles/').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(getApproveList(data));
        }).catch(() => {
            console.log('error: Can not get List');
        })
    }
}

export const DeleteApproveAticle = (id) => {
    return (dispatch) => {
        axios.delete('https://ense-701-team-9-seer.herokuapp.com/api/articles/'+id).then((res) => {
            window.location.href = './CheckandApprove';
        }).catch(() => {
            console.log('error: Can not get List');
        })
    }
}