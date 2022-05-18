import React, { Component } from "react";
import { SubmitpageTitle, SubmitpageWrapper, SubmitInput, Button } from './style';
import { actionCreator } from './store/index';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Submit_article extends Component {
  render() {
    const { postStatus } = this.props;
    if( postStatus === false ){
      return (
        <SubmitpageWrapper>
          <SubmitpageTitle>Ei Yo submit your article here</SubmitpageTitle>
          <form>
          <div class="row mb-3"><label for="inputEmail3" class="col-sm-2 col-form-label">
            <SubmitInput>
              
            Title: <div class="col-sm-10">
              <input placeholder="title" ref={(input) => {this.title = input}}/></div>
            </SubmitInput>
            </label>
</div>




            <SubmitInput>
            Author: 
              <input placeholder="author" ref={(input) => {this.author = input}}/>
            </SubmitInput>





            <SubmitInput>
            Source: 
              <input placeholder="source" ref={(input) => {this.source = input}}/>
            </SubmitInput>




            <SubmitInput>
            DOI: 
              <input placeholder="DOI" ref={(input) => {this.DOI = input}}/>
            </SubmitInput>




            <SubmitInput>
            Public Year: 
              <input placeholder="PubYear" ref={(input) => {this.PubYear = input}} type="date" />
            </SubmitInput>




            <SubmitInput>
            ClaimedBenefir: 
              <input placeholder="ClaimedBenefir" ref={(input) => {this.ClaimedBenefir = input}}/>
            </SubmitInput>



            <SubmitInput>
            LevelofEvidence: 
              <input placeholder="LevelofEvidence" ref={(input) => {this.LevelofEvidence = input}}/>
            </SubmitInput>






            <Button onClick={() => this.props.SubmitArticle(
              this.title,
              this.author,
              this.source,
              this.DOI,
              this.PubYear,
              this.ClaimedBenefir,
              this.LevelofEvidence
              )}>Submit</Button>
          </form>
        </SubmitpageWrapper>)






        }else if( postStatus === true ){
          return(
            <div>
              <h1>Post successful</h1>
              <h1>Post successful</h1>
              <h1>Post successful</h1>
              <h1>Post successful</h1>
              <h1>Post successful</h1>
              <h1>Post successful</h1>
              <h1>Post successful</h1>
              <a href="/">Back to Home page</a>
            </div>
          )
        }else{
          return(
            <div>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
              <h1>error</h1>
            </div>
          )
        }
  }
}

const mapState = (state) => ({
  postStatus: state.get('Submit').get('post')
});

const mapDispatch = (dispatch) => ({
  SubmitArticle(titleElem, authorElem,sourceElem,DOIElem,PubYearElem,ClaimedBenefirElem,LevelofEvidenceElem){
      dispatch(actionCreator.postToDb(
        titleElem.value, 
        authorElem.value,
        sourceElem.value,
        DOIElem.value,
        PubYearElem.value,
        ClaimedBenefirElem.value,
        LevelofEvidenceElem.value));
  }
});

export default connect(mapState, mapDispatch)(Submit_article);