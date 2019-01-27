import React, { Component } from 'react';
import TPD1 from '../img/TPD1.png'
import TPD2 from '../img/TPD2.png'
import TPD3 from '../img/TPD3.png'

class ProjectContainer extends Component{
  render(){
    return(
      <div>
        <div>
          <p><b>Projects</b></p>
        </div>
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
        <div>
          <p><b>Turbo Typing</b></p>
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
        </div>
        <div>
          <p><b>The Plant Diary</b></p>
            <p>
              <span>
                <a className='link' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=EL4fazHLjEI&feature=youtu.be">demo </a>
               | <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/jkhaha/plant_diary">github</a>
              </span>
            </p>
          <p className="project-desc">The Plant Diary is an app made for plant lovers. A user can create an account
          and password and create a list of plants they have in their home. Users can then create
          a list of their plants, including details like photos, species, and location,
          and add comments to each plant's diary about the plant's condition!
          There is also a search bar so users can search their plants based on species.</p>
        <div>
          <img className="project-photo" src={TPD1} alt="head shot" height="200px"/>
        </div>
        <div>
          <img className="project-photo" src={TPD2} alt="head shot" height="200px"/>
        </div>
        <div>
          <img className="project-photo" src={TPD3} alt="head shot" height="200px"/>
        </div>
        </div>
      </div>
    )
  }
}

export default ProjectContainer;
