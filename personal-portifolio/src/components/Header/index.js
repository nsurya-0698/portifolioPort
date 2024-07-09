import {Component} from 'react';
import resume from './SuryaTejaResume.pdf'
import './index.css';

class Header extends Component{
    state = {hamburgerclicked:false,makeBlur:true,hideHam:false,prevPos:window.pageYOffset,topVal:0}

    hamClicked = () => {
        this.setState({hamburgerclicked:true,makeBlur:false,hideHam:true});
    }

    closeHam = () => {
        this.setState({hamburgerclicked:false,makeBlur:true,hideHam:false});
    }

    scrolled = event => {
        console.log('scrolled')
    }

    render(){
        const {hamburgerclicked,makeBlur,hideHam,topVal} = this.state; 

        return(
            <div className={`header-container ${topVal !== 0 ? 'updatetop':''}`} onScroll={this.scrolled}>
                <a href="https://suryatejanammi.netlify.app/">
                    <img className="site-logo" src={require('./logo.svg').default} alt="logo" />
                </a>
                <div className={`overlay ${hamburgerclicked?"":"burger-data"} ${makeBlur?"":"hider"}`}>
                    <span className="closing" onClick={this.closeHam}>&times;</span>
                    <ul className="header-list overlay-content">
                        <a href="#about" className="nav-things">
                            <li className="header-content about">About</li>
                        </a>
                        {/* <a href="#Education" className="nav-things">
                            <li className="header-content exp">Education</li>
                        </a> */}
                        <a href="#exp" className="nav-things">
                            <li className="header-content exp">Experience</li>
                        </a>
                        {/* <a href="#work" className="nav-things">
                            <li className="header-content work">Projects</li>
                        </a> */}
                        <a href="#contact" className="nav-things">
                            <li className="header-content contact">Contact</li>
                        </a>
                        <li>
                            <a href={resume} target="_blank" rel="noreferrer">
                                <button className="btn resume">Resume</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <span className={`burger ${hideHam?"hamhider":""}`} onClick={this.hamClicked} >&#9776;</span>
            </div>
        )
    }
}

export default Header;