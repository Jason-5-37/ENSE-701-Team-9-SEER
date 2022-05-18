import React, { Component } from "react";
import { ContactusWrapper, ContactusTitle } from './style';

class Contantus extends Component {

    render() {
        return (
            <div>
                <ContactusWrapper>
                    <ContactusTitle>Contact us</ContactusTitle>
                    <p>Any question pleace Contact us by:</p>
                    <p>Phone number:0223021599</p>
                    <p>Eamil:skw0852@aut.ac.nz</p>
                </ContactusWrapper>
            </div>

        )
    }
}

export default Contantus;