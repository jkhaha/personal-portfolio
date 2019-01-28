import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Header from './Header'
import AboutContainer from "./AboutContainer"
import ProjectContainer from "./ProjectContainer"
import Contact from "./Contact"
import Home from "./Home"

class WindowContainer extends Component{
  render(){
    return(
      <div>
      <Home/>
      <Header/>

      <ScrollableAnchor id={'about_me'}>
        <AboutContainer/>
      </ScrollableAnchor>

      <ScrollableAnchor id={'my_projects'}>
        <ProjectContainer/>
      </ScrollableAnchor>

      <ScrollableAnchor id={'contact_me'}>
        <Contact/>
      </ScrollableAnchor>
      </div>
    )
  }
}

export default WindowContainer;
