import React, { Component } from 'react';

class TheCompoundEffect extends Component{
  render(){
    return(
      <div>
        <p><b>The Compound Effect</b></p>
          <p>
            <span>
            <a className='link' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ms7DAiEAoKk&feature=youtu.be">demo </a>
             | <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/jkhaha/final_project_frontend">github</a>
         </span>
          </p>
        <p className="project-desc">The Compound Effect is an app that helps users build habits using the habit building
        cycle of cues, routines, and rewards. A user can create an account and create a habit,
        specifically building out a cue, routine, and reward that they think will help them stick to a particular
        habit. If that cycle does not work for a user, they can go back and edit that habit.</p>
      </div>
    )
  }
}

export default TheCompoundEffect;
