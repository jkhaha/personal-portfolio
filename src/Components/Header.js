import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div className="header-component">
        <a className='link' href='#about_me'> About Me </a> |
        <a className='link' href='#my_projects'> Projects </a> |
        <a className='link' href='#contact_me'> Contact Me </a>
      </div>
    )
  }
}

export default Header
