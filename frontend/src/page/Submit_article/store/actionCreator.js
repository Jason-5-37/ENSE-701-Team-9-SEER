import axios from "axios";
import * as constants from './constants';

const PostState = () => ({
    type: constants.POSTREQEST
})


export const postToDb = (titleElem, authorElem,sourceElem,DOIElem,PubYearElem,ClaimedBenefirElem,LevelofEvidenceElem) => {
    return(dispatch) => {
        let postdata = {
            title:titleElem,
            author:authorElem ,
            source:sourceElem,
            published_date:PubYearElem,
            DOI:DOIElem,
            ClaimedBenefit:ClaimedBenefirElem,
            LevelofEvidence:LevelofEvidenceElem
        };
        axios.post('http://localhost:8082/api/NotSubmitArticles',postdata).then((res) => {
            console.log(res);
            dispatch(PostState());
        }).catch(() => {
            console.log('error: Can not post');
        })
    }
}
    
