import React, { Component } from "react";
import { ContactusWrapper, ContactusTitle } from './style';

class Contantus extends Component {

    render() {
        return (
            <div>
                <ContactusWrapper>
                    <ContactusTitle>Contact us</ContactusTitle>
                    <p>Any question pleace Contact us by:</p>
                    <p>Phone number:888888888</p>
                    <p>Eamil: xxxxxxx</p>
                </ContactusWrapper>
            </div>

        )
    }
}

export default Contantus;