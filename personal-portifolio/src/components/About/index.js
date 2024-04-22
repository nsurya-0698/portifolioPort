import {RiArrowDropRightLine} from 'react-icons/ri'
import proPic from './ProffPic.jpeg'
import './index.css';


const About = () => {
    return (
        <div className="about-container" id="about">
            <h1 className="about-header">About Me</h1>
            <div className="about-content-wrapper">
                <div className="about-content">
                    <p className="about-content-one">
                    I am a dedicated software engineer specializing in full-stack development, particularly focused on Java and microservices architecture. My passion lies in guiding projects from inception to successful delivery, optimizing platform performance, and leading global upgrade initiatives. With a strong foundation in Java development, cloud platforms, and data migration strategies, I bring a collaborative approach to problem-solving and innovation. My effective communication skills and commitment to driving innovative solutions make me a valuable asset in any team environment.                    </p>
                    <a href="mailto:snnhp@umsystem.edu">
                         <button className="btn contact-btn">Hire me</button>
                    </a>
                </div>
                <div className="personal-image-container">
                    <img className="personalpic" src ={proPic} alt="PersonalPic"/>
                    {/* <img className="personalpic" src ={PPimg}/> */}
                </div>
            </div>
        </div>
    )
}

export default About