import React, { Component } from "react";
import { CheckWrapper, CheckTitle, Articlelist ,ArticleWapper} from "./style";
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';

class CheckandApprove extends Component {

  render() {
    return (
        <CheckWrapper>
            <CheckTitle>Check and Approve</CheckTitle>
            {this.ShowArticles()}
        </CheckWrapper>
    )
  }
  componentDidMount(){
      this.props.handleInput();
  }

  ShowArticles(){
    const {Approvelist} = this.props;
    return Approvelist.map((item) =>{
      return (
      <ArticleWapper key={item.get('_id')}>
        <Articlelist>
          <div>{item.get('title')}</div>
          <div>{item.get('author')}</div>
          <div>{item.get('source')}</div>
          <div>{item.get('DOI')}</div>
          <div>{item.get('ClaimedBenefit')}</div>
          <div>{item.get('published_date')}</div>
          <div>{item.get('LevelofEvidence')}</div>
          </Articlelist>

          <button onClick={() => this.props.ApproveArticle(
              item.get('_id'),
              item.get('title'),
              item.get('author'),
              item.get('source'),
              item.get('DOI'),
              item.get('ClaimedBenefit'),
              item.get('published_date'),
              item.get('LevelofEvidence'))}>Approve this Article</button>
          </ArticleWapper>

          );
        }
        );
      }
}


const mapStateTothis= (state) => {
    return {
        Approvelist: state.getIn(['Approve','Approvelist'])
    }
  }
  
  const mapDispathTothis = (dispatch) => {
    return{
        handleInput(){
            dispatch(actionCreator.getReqArticles());
        },
        ApproveArticle(id,title, author, source, DOI, ClaimedBenefit, published_date, LevelofEvidence){
            dispatch(actionCreator.postAticle(id, title, author, source, DOI, ClaimedBenefit, published_date, LevelofEvidence));
        }
    }
  }
  
  
  export default connect(mapStateTothis, mapDispathTothis)(CheckandApprove);