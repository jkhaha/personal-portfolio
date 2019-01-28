import React, { Component } from 'react';
import ThePlantDiary from './ThePlantDiary';
import TurboTyping from './TurboTyping';
import TheCompoundEffect from './TheCompoundEffect';

class ProjectContainer extends Component{
  render(){
    return(
      <div>
        <div>
          <p className="section-headers"><b>Projects</b></p>
        </div>
        <TheCompoundEffect/>
        <TurboTyping/>
        <ThePlantDiary/>
      </div>
    )
  }
}

export default ProjectContainer;
