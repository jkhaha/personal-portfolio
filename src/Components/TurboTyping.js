import React, { Component } from 'react';
import TT1 from '../img/TT1.png'
import TT2 from '../img/TT2.png'
import TT3 from '../img/TT3.png'

class TurboTyping extends Component{
  render(){
    return(
      <div className="turbo-typing">
        <p className="project-names"><b>Turbo Typing</b></p>
        <p>
          <span>
          <a className='link' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=hHQIUlHeOd0&feature=youtu.be">demo </a>
           | <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/jkhaha/speed-typing_frontend">github</a>
        </span>
        </p>
        <p className="project-desc"> Turbo Typing is a typing test that measures speed and accuracy.
        A user enters in a username and chooses a level of difficulty, and they have 60 seconds to complete
        as much of a prompt as they can. Words spelled correctly turn gray, words spelled incorrectly turn red,
        and the next word the user has to type turns blue. In Turbo Typing, there is no going back as the
        delete button has been disabled, so the trick is to keep moving forward! This project was one of my favorties
        as I love typing tests. My current record is 116 words per minute!
        </p>
        <div>
          <img className="project-photo" src={TT1} alt="head shot" height="400px"/>
        </div>
        <div>
          <img className="project-photo" src={TT2} alt="head shot" height="400px"/>
        </div>
        <div>
          <img className="project-photo" src={TT3} alt="head shot" height="400px"/>
        </div>
      </div>
    )
  }
}

export default TurboTyping;
