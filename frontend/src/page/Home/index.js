import React, { Component } from "react";
import { HomeWrapper, HomeTitle } from "./style";
// import "./index.css"
class Home extends Component {

    render() {
        return (

            <HomeWrapper>
                <HomeTitle>Welcome to Assessment 1b</HomeTitle>
                <div>
                    It is a software product called "the Software Practice Empirical Evidence Database" (SPEED). Basically it will be a searchable database of evidence about different claims about different SE practices. These will be found and put
                    into the database by SE experts I will hire in the Software Engineering Research lab (SERL) at AUT. Any practitioner, researcher or student will be able to look for evidence related to claims about software engineering practices by searching this database and they will be shown a summary of the published relevant research evidence for and against the claims.Three main activities that the SPEED product needs to support are: finding suitable articles, extracting the appropriate information from them, and entering them into the SPEED database. My plan is to crowd source the articles. Anyone from the public can propose an article to include in SPEED by submitting a link to it. Staff from SERL  (Moderators)  will then moderate  the  article  for  quality  and non-duplication.  If  it  passes the  moderation process the article is then read and analysed by staff at SERL (Analysts) and the relevant information extracted from the article and entered into the SPEED database. &nbsp;&nbsp;&nbsp;:)
                </div>
            </HomeWrapper>

        )
    }
}

export default Home;