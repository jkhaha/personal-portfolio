import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div className="header-component">
        <div className="header-words">
        <a className='header-link' href='#about_me'> About Me </a> |
        <a className='header-link' href='#my_projects'> Projects </a> |
        <a className='header-link' href='#contact_me'> Contact Me </a>
        </div>
      </div>
    )
  }
}

export default Header
