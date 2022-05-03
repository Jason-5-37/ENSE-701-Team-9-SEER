import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchpageWrapper, SearchpageTitle, Articlelist } from './style';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';

class Search_article extends Component {

  render() {
    return (
      <SearchpageWrapper>
        <SearchpageTitle>Search article</SearchpageTitle>
        {this.ShowArticles()}
      </SearchpageWrapper>
    )
  }

  componentDidMount(){
    this.props.handleInput();
  }

  ShowArticles(){
    const {list} = this.props;
    return list.map((item) =>{
      return (
      <Link key={item.get('id')}>
        <Articlelist>
          <div>{item.get('title')}</div>
          <div>{item.get('author')}</div>
          <div>{item.get('source')}</div>
          <div>{item.get('DOI')}</div>
          <div>{item.get('ClaimedBenefit')}</div>
          <div>{item.get('published_date')}</div>
          <div>{item.get('LevelofEvidence')}</div>
          </Articlelist>
          </Link>
          );
        }
        );
      }
}

const mapStateTothis= (state) => {
  return {
      list: state.getIn(['Search','list'])
  }
}

const mapDispathTothis = (dispatch) => {
  return{
      handleInput(){
          dispatch(actionCreator.getArticles());
      }
  }
}


export default connect(mapStateTothis, mapDispathTothis)(Search_article);