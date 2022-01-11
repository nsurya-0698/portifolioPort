import {RiArrowDropRightLine} from 'react-icons/ri'
import {Component} from 'react';

import './index.css';

const companyName = [
    {
        id:0,
        companyName:'iB Hubs'
    },
    // {
    //     id:1,
    //     companyName: 'Samsung'
    // }
]

const companyContent = [
    {
        id:0,
        role:'Junior software developer',
        workDate: 'July 2020 - December 2021',
        jobContent: ['Build Business Models to make the reach of product to more in number.',
        'Interacting with the customers and understanding their pain points & addressing them.',
        'Making our product reach huge numbers and getting insights to make more Human centric approach in our product.',
        ]
    },
    // {
    //     id: 1,
    //     role: 'CCBP Learning Platform - India - Software Trainee/intern',
    //     workDate: 'jukbcjabjsbc',
    //     jobContent: [
    //         'svhjcsjlcjovco oo oou ouwdou wyd ouwd oduowq douydouqwy o o o wouoqw oow o o  iou o'
    //     ]
    // }
]

class Experience extends Component {
    state = {activeId:0,activeTab:'tabColor'}

    updateID = id => {
        this.setState({activeId: id});
    }

    render() {

        const {activeId,activeTab} = this.state;

        return (
            <div className="experience" id="experience">
                <h1 className="experience-header">Where I've Worked</h1>
                <div className="experience-data">
                    <div className="experience-names">
                        {companyName.map(item => <p key={item.id} 
                        onClick={this.sendId = () => this.updateID(item.id)} 
                        className={`company-name ${activeId === item.id ? activeTab : ''}`}>{item.companyName}</p>)}
                    </div>
                    <div className="company-content">
                        <h3>{companyContent[activeId].role}</h3>
                        <p>{companyContent[activeId].workDate}</p>
                        {companyContent[activeId].jobContent.map(
                            item => <p key={item}>{<RiArrowDropRightLine className="arrows"/>} {item}</p>
                        )}
                        <h3>Software Trainee/intern</h3>
                        <p>August 2019 – July 2020</p>
                        <p><RiArrowDropRightLine className="arrows"/>Got trained in Web Application Development Foundations. </p>
                        <p><RiArrowDropRightLine className="arrows"/> Trained in Retrieving and analyzing data using SQL, Python and also building responsive web pages using
                             HTML, CSS and Bootstrap.  </p>
                        <p><RiArrowDropRightLine className="arrows"/>Identified and acted to improve team knowledge of new business processes and technologies.</p>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;