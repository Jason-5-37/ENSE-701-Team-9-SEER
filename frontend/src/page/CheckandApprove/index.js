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
          <div>Title: {item.get('title')}</div>
          <div>Author: {item.get('author')}</div>
          <div>Source: {item.get('source')}</div>
          <div>DOI: {item.get('DOI')}</div>
          <div>ClaimedBenefit: {item.get('ClaimedBenefit')}</div>
          <div>published date: {item.get('published_date')}</div>
          <div>Level of Evidence: {item.get('LevelofEvidence')}</div>
          <div>type: {item.get('type')}</div>
          </Articlelist>

          <button onClick={() => this.props.ApproveArticle(
              item.get('_id'),
              item.get('title'),
              item.get('author'),
              item.get('source'),
              item.get('DOI'),
              item.get('ClaimedBenefit'),
              item.get('published_date'),
              item.get('LevelofEvidence'),
              item.get('type')
              )
            }
              >
                Approve this Article
              </button>
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
        ApproveArticle(id,title, author, source, DOI, ClaimedBenefit, published_date, LevelofEvidence, type){
            dispatch(actionCreator.postAticle(id, title, author, source, DOI, ClaimedBenefit, published_date, LevelofEvidence, type));
        }
    }
  }
  
  
  export default connect(mapStateTothis, mapDispathTothis)(CheckandApprove);