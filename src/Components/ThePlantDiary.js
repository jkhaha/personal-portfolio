import React, { Component } from 'react';
import TPD1 from '../img/TPD1.png'
import TPD2 from '../img/TPD2.png'
import TPD3 from '../img/TPD3.png'

class ThePlantDiary extends Component{
  render(){
    return(
      <div className="plant-diary">
        <p className="project-names"><b>The Plant Diary</b></p>
          <p>
            <span>
              <a className='link' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=EL4fazHLjEI&feature=youtu.be">demo </a>
             | <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/jkhaha/plant_diary">github</a>
            </span>
          </p>
        <p className="project-desc">The Plant Diary is an app made for plant lovers to keep track
          of their plants and plant-related tasks. A user can create an account
        and password and create a list of plants they have in their home, including details like photos,
        species, and location. Users can also add comments to each plant's diary about the plant's condition
        and create a to-do list for plant related tasks. 
        There is also a search bar so users can search their plants based on species.</p>
      <div>
        <img className="project-photo" src={TPD1} alt="head shot" height="400px"/>
      </div>
      <div>
        <img className="project-photo" src={TPD2} alt="head shot" height="400px"/>
      </div>
      <div>
        <img className="project-photo" src={TPD3} alt="head shot" height="400px"/>
      </div>
      </div>
    )
  }
}

export default ThePlantDiary;
