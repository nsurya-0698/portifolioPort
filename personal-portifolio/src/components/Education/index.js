import {RiArrowDropRightLine} from 'react-icons/ri'
import {Component} from 'react';

import './index.css';

const collegeName = [
    {
        id:0,
        name:'Masters',
        collegeName: "University of Missouri - Kansas City"
    },
    {
        id:1,
        name: 'Under-graduation',
        collegeName: "Aditya Engineering College - India"
    }
]

const collegeContent = [
    {
        id:0,
        specialization :'Computer Science',
        EducationDate: 'August 2021 - Present(Expected graduation date: May, 2023)',
        degreeDiscription: ['Realated Subjects: Cloud Computing, Advanced Software Engineering, Principles of Big Data']
    },
    {
        id: 1,
        specialization :'Electrical and Electronics Engineering',
        EducationDate:"May 2015 - Jun 2019",
        degreeDiscription: ['Realated Subjects: Advanced Data Structures, C Language, Operating Systems        ']
    }
]

class Education extends Component {
    state = {activeId:0,activeTab:'tabColor'}

    updateID = id => {
        this.setState({activeId: id});
    }

    render() {

        const {activeId,activeTab} = this.state;

        return (
            <div className="Education" id="Education">
                <h1 className="experience-header">My Education</h1>
                <div className="experience-data">
                    <div className="experience-names">
                        {collegeName.map(item => <p key={item.id} 
                        onClick={this.sendId = () => this.updateID(item.id)} 
                        className={`company-name ${activeId === item.id ? activeTab : ''}`}>{item.name}</p>)}
                    </div>
                    <div className="company-content">
                       <h3>{collegeName[activeId].collegeName}</h3>
                        <h3>{collegeContent[activeId].specialization}</h3>
                        <p>{collegeContent[activeId].EducationDate}</p>
                        {collegeContent[activeId].degreeDiscription.map(
                            item => <p key={item}>{<RiArrowDropRightLine className="arrows"/>} {item}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;