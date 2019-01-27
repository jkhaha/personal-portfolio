import React, { Component } from 'react';
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin2.png'
import Medium from '../img/medium.png'

class ContactLinks extends Component{
  render(){
    return(
      <div>
      <span>
        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/jkhaha"><img src={Github} height='60px'></img></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jackie-ha/"><img src={LinkedIn} height='62.5px'></img></a>
        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.medium.com/@jkha0421"><img src={Medium} height='60px'></img></a>
      </span>
      </div>
    )
  }
}

export default ContactLinks;
