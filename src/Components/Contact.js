import React, { Component } from 'react';
import ContactLinks from './ContactLinks'

class Contact extends Component{
  render(){
    return(
      <div>
        <p className="contact"><b>
          Contact Me:
        </b>
        </p>
        <p>jackie.ha39@gmail.com</p>
        <ContactLinks/>
      </div>
    )
  }
}

export default Contact;
