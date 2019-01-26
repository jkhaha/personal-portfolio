import React, { Component } from 'react';
import AboutContainer from "./AboutContainer"
import ProjectContainer from "./ProjectContainer"
import Contact from "./Contact"
import NavBar from "./NavBar"

class WindowContainer extends Component{
  render(){
    return(
      <div>
      <NavBar/>
      <AboutContainer/>
      <ProjectContainer/>
      <Contact/>
      </div>
    )
  }
}

export default WindowContainer;
