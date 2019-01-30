import React, { Component } from 'react';
import ContactLinks from './ContactLinks'

class Contact extends Component{
  render(){
    return(
      <div>
        <p className="contact"><b>Contact Me:</b></p>
        <a className="email" href="mailto:jackie.ha39@gmail.com">jackie.ha39@gmail.com</a>
        <ContactLinks/>
      </div>
    )
  }
}

export default Contact;
