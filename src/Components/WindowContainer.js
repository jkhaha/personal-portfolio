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
      
      <ScrollableAnchor id={'section1'}>
        <AboutContainer/>
      </ScrollableAnchor>

      <ScrollableAnchor id={'section2'}>
        <ProjectContainer/>
      </ScrollableAnchor>

      <ScrollableAnchor id={'section3'}>
        <Contact/>
      </ScrollableAnchor>
      </div>
    )
  }
}

export default WindowContainer;
