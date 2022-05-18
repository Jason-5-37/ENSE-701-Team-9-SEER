import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchpageWrapper, SearchpageTitle, TableWrapper, SearchWrapper, Button, Select } from './style';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import Table from "../../common/Table/ReactTable";
import tablecolumns from "../../common/Table/TableColumns";

class Search_article extends Component {

  render() {
    return (
      <SearchpageWrapper>
        <SearchpageTitle>Search article</SearchpageTitle>
        <SearchWrapper>
        <Select ref={(input) => {this.Articletype = input}}>
          <option value="All">All</option>
          <option value="TDD">TDD</option>
          <option value="Mob Programming">Mob Programmin</option>
        </Select>
        <Button onClick={() => this.props.SelectType(this.Articletype)}>Go</Button>
          <input ref={(input) => {this.search = input}}/>
          <Button onClick={() => this.props.SetSearch(this.search)} >Search Title</Button>
        </SearchWrapper>
        <TableWrapper>
          <Table 
            data={this.props.list} 
            columns={tablecolumns}
            />
        </TableWrapper>
        </SearchpageWrapper>
    )
  }

  componentDidMount(){
    this.props.SelectType(this.Articletype)
  }
}

const mapStateTothis= (state) => {
  return {
      list: state.getIn(['Search','list']),
      Type: state.getIn(['Search','Type'])
  }
}

const mapDispathTothis = (dispatch) => {
  return{
      handleInput(){
          dispatch(actionCreator.getArticles());
      },
      SetSearch(Searchinput){
        dispatch(actionCreator.getSearchResult(Searchinput.value));
      },
      SelectType(Type){
        dispatch(actionCreator.getType(Type.value));
      }
  }
}


export default connect(mapStateTothis, mapDispathTothis)(Search_article);