import React from 'react'
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';


const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Food Is an Important Part of a Balanced Diet
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis aspernatur excepturi reiciendis vitae ut similique iusto labore, fugiat corrupti cupiditate quam neque rerum corporis tempora cum illum dolore. Voluptatem.
            </p>

            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis aspernatur excepturi reiciendis vitae ut similique iusto labore, fugiat corrupti cupiditate quam neque rerum corporis tempora cum illum dolore. Voluptatem.
            </p>

            <div className="about-buttons-container">
                <button className="secondary-button">Lean More</button>
                <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About