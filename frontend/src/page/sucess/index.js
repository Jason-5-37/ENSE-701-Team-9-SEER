import React, { Component } from 'react'
import { Title } from '../../common/header/style'

export default class index extends Component {
  render() {
    return (
      <div >
          <Title style={{color: "white", textDecoration: "underline"}}>Submit sucess!!!</Title>
       
      
        <button style={{color: "Black",textAlign: "center"}}onClick={() => {this.props.history.goBack()}}>Back</button>



          
      </div>
    )
  }
}
