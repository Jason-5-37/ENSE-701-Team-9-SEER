import React, { Component } from "react";
import { SubmitpageTitle, SubmitpageWrapper, SubmitInput, Button, Input, InputWrapper2, Inputcontent, BackLink, Select } from './style';
import { actionCreator } from './store/index';
import { connect } from 'react-redux';

class Submit_article extends Component {
    render() {
        const { postStatus } = this.props;
        if (postStatus === false) {
            return (
                <>
                    <SubmitpageTitle>Ei Yo submit your article here</SubmitpageTitle>
                    <SubmitpageWrapper>
                        <form>
                            <InputWrapper2>
                                <SubmitInput>
                                    <Inputcontent>
                                        title:
                                    </Inputcontent>
                                    <Input placeholder="title" ref={(input) => { this.title = input }} />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        author:
                                    </Inputcontent>
                                    <Input placeholder="author" ref={(input) => { this.author = input }} />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        source:
                                    </Inputcontent>
                                    <Input placeholder="source" ref={(input) => { this.source = input }} />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        DOI:
                                    </Inputcontent>
                                    <Input placeholder="DOI" ref={(input) => { this.DOI = input }} />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        Public Year:
                                    </Inputcontent>
                                    <Input placeholder="PubYear" ref={(input) => { this.PubYear = input }} type="date" />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        Claimed Benefir:
                                    </Inputcontent>
                                    <Input placeholder="ClaimedBenefir" ref={(input) => { this.ClaimedBenefir = input }} />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        Level of Evidence:
                                    </Inputcontent>
                                    <Input placeholder="LevelofEvidence" ref={(input) => { this.LevelofEvidence = input }} />
                                </SubmitInput>
                                <SubmitInput>
                                    <Inputcontent>
                                        Type:
                                    </Inputcontent>
                                    <Select ref={(input) => { this.type = input }}>
                                        <option value="TDD">TDD</option>
                                        <option value="Mob Programming">Mob Programmin</option>
                                    </Select>
                                </SubmitInput>
                            </InputWrapper2>

                            <Button onClick={() => this.props.SubmitArticle(
                                this.title,
                                this.author,
                                this.source,
                                this.DOI,
                                this.PubYear,
                                this.ClaimedBenefir,
                                this.LevelofEvidence,
                                this.type
                            )}>Submit</Button>

                        </form>

                    </SubmitpageWrapper>
                </>
            )
        } else if (postStatus === true) {
            return (
                <>
                    <SubmitpageTitle>Post successful</SubmitpageTitle>
                    <SubmitpageTitle><BackLink href="/">Back to Home page</BackLink></SubmitpageTitle>
                </>
            )
        } else {
            return (
                <div>
                    <SubmitpageTitle>Error. Fail to Submit</SubmitpageTitle>
                </div>
            )
        }
    }
}

const mapState = (state) => ({
    postStatus: state.get('Submit').get('post')
});

const mapDispatch = (dispatch) => ({
    SubmitArticle(titleElem, authorElem, sourceElem, DOIElem, PubYearElem, ClaimedBenefirElem, LevelofEvidenceElem, type) {
        dispatch(actionCreator.postToDb(
            titleElem.value,
            authorElem.value,
            sourceElem.value,
            DOIElem.value,
            PubYearElem.value,
            ClaimedBenefirElem.value,
            LevelofEvidenceElem.value,
            type.value));
    }
});

export default connect(mapState, mapDispatch)(Submit_article);