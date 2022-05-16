import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchpageWrapper, SearchpageTitle, Articlelist, SearchWrapper, Button } from './style';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';

class Search_article extends Component {

  render() {
    return (
      <SearchpageWrapper>
        <SearchpageTitle>Search article</SearchpageTitle>
        <SearchWrapper>
          <input ref={(input) => {this.search = input}}/>
          <Button onClick={() => this.props.SetSearch(this.search)} ></Button>
        </SearchWrapper>
        {this.StateSwitch()}      
      </SearchpageWrapper>
    )
  }

  componentDidMount(){
    this.props.handleInput();
  }

  StateSwitch(){
    if(this.props.State === false){
      return this.ShowArticles();
    }else if(this.props.State === true){
      return this.Search_Article(this.props.SearchInput);
    }else{
      return(
        <h1>Error</h1>
      )
    }
  }

  Search_Article(search){
    const {list} = this.props;
    return list.map((item) => {
      if(item.get('title') === search){
        console.log(item.get('title'));
        return(
          <Articlelist>
          <div>{item.get('title')}</div>
          <div>{item.get('author')}</div>
          <div>{item.get('source')}</div>
          <div>{item.get('DOI')}</div>
          <div>{item.get('ClaimedBenefit')}</div>
          <div>{item.get('published_date')}</div>
          <div>{item.get('LevelofEvidence')}</div>
          </Articlelist>
          );
        }
      }
      );
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
      list: state.getIn(['Search','list']),
      SearchInput: state.getIn(['Search','SearchInput']),
      State: state.getIn(['Search','State'])
  }
}

const mapDispathTothis = (dispatch) => {
  return{
      handleInput(){
          dispatch(actionCreator.getArticles());
      },
      SetSearch(Searchinput){
        dispatch(actionCreator.getSearchinput(Searchinput.value));
      }
  }
}


export default connect(mapStateTothis, mapDispathTothis)(Search_article);