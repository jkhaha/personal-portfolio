import React, { Component } from 'react';
import photo from '../img/photo.jpg'

class AboutContainer extends Component {
  render(){
    return(
      <div className="about-container">
      <p className="section-headers"><b>About Me</b></p>
        <img className="head-shot" src={photo} alt="head shot" height="300px"/>
      <p className="about-me"> My name is Jackie Ha, and I am a full stack developer with a passion for technology
        that can help people. I first fell in love with coding after teaching myself HTML and CSS and making
        a few mock blogs for Harry Potter characters. I enjoyed playing around with code and seeing functionality change.
        I have experience with Ruby on Rails, Javascript, React and Redux, and I’m
        looking for some opportunities where I can grow as a developer.
        On a more personal note, I love the NYC food scene and am a behavioral economics enthusiast.</p>
      </div>

    )
  }
}

export default AboutContainer;
