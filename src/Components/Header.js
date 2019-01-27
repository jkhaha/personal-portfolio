import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div className="header-component">
        <a className='link' href='#section1'> About Me </a> |
        <a className='link' href='#section2'> Projects </a> |
        <a className='link' href='#section3'> Contact Me </a>
      </div>
    )
  }
}

export default Header
