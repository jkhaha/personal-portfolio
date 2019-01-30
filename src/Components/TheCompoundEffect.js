import React, { Component } from 'react';
import TCE1 from '../img/TCE1.png'
import TCE2 from '../img/TCE2.png'
import TCE3 from '../img/TCE3.png'

class TheCompoundEffect extends Component{
  render(){
    return(
      <div className="compound-effect">
        <p className="project-names"><b>The Compound Effect</b></p>
          <p>
            <span>
            <a className='link' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ms7DAiEAoKk&feature=youtu.be">demo </a>
             | <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/jkhaha/final_project_frontend">github</a>
         </span>
          </p>
        <p className="project-desc">The Compound Effect is an app that helps users build and track habits
          using the habit loop of cues, routines, and rewards. A user can create a secure account
          and create a habit, specifically laying out a cue, routine, and reward. A cue is a trigger that tells
          the user when do to the habit, the routine is the habit itself, and the reward is some action that helps
          the brain remember that this habit is worth remembering next time. If that cycle does not work for a user,
          the habit cycle can be edited. 
        </p>
        <div>
          <img className="project-photo" src={TCE1} alt="head shot" height="400px"/>
        </div>
        <div>
          <img className="project-photo" src={TCE2} alt="head shot" height="400px"/>
        </div>
        <div>
          <img className="project-photo" src={TCE3} alt="head shot" height="400px"/>
        </div>
      </div>
    )
  }
}

export default TheCompoundEffect;
