import React, { Component } from "react";
import { ContactusWrapper, ContactusTitle } from "./style";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import sucess from "./sucess.js";

class Contantus extends Component {
  state = {
    email: "",
    message: "",
    sent: false,
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
formSubmit=(e)=>
{

}


  render() {
    return (
      <div style={{ padding: "20px" }}>
        <ContactusWrapper>
          <ContactusTitle>Contact us</ContactusTitle>
          <div class="mb-3">
            <label for="FormControlInput1" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="FormControlInput1" placeholder="Please input your email here to reply.       Format:name@example.com" value={this.state.email} onChange={this.handleEmail}></input>
            <br />
            <br />
            <label for="FormControlInput1" class="form-label">
              Subject
            </label>
            <input type="email" class="form-control" id="FormControlInput1" value={this.state.subject} onChange={this.handleSubject}></input>
          </div>
          <div class="mb-3">
            <br />
            <br />
            <label for="FormControlTextarea1" class="form-label">
              Textarea
            </label>
            <textarea class="form-control" id="FormControlTextarea1" rows="10" placeholder="Please input anything you would like to speak to us " value={this.state.message} onChange={this.handleMessage}></textarea>
            <a href="sucess.js"><button type="submit" class="btn btn-primary"value="submit">Submit</button></a>
          </div>
          <p>Or you can Contact us by:</p>
          <br></br>
          <br />
          <a href="mailto:skw0852@aut.ac.nz.com?">Email us</a>
          <br/>
          <a href="tel:0223051599">Phone number:0223021599</a>
          <br/>
          <a href='https://goo.gl/maps/rTvLfpU5MYgT88dJA'>Address : 85 Aut Road Auckland 1010 </a>
        </ContactusWrapper>
       
      </div>
       
    );
  }
}

export default Contantus;
