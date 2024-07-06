import {RiArrowDropRightLine} from 'react-icons/ri'
import {Component} from 'react';

import './index.css';

const companyName = [
    {
        id:0,
        companyName:'Optum - UHG'
    },
    {
        id:1,
        companyName:'iB Hubs'
    },
    {
        id:2,
        companyName: 'iB Hubs'
    }
]

const companyContent = [
    {
        id: 0,
        role: 'Full Stack Developer',
        Location: 'Minnesota, USA',
        workDate: '02/2022 - Present',
        jobContent: [
        'Expertised in Full-stack development using a range of technologies including Spring Boot, JPA, hibernate, PostgreSQL, Azure Services, Jenkins, and Kubernetes Clusters.',
        'Proficient in database management using tools like PGAdmin and DBeaver, and expertise in working with 20+ database tables using Spring Boot and JPA.',
        'Designed, developed, and secured J2EE web services, implementing SOAP and RESTful principles for efficient communication and robust security.',
        'Expert in React and Node.js for seamless web application development, combining frontend finesse with backend robustness in the MEAN stack.',
        'Solid understanding of concurrent read operations and exclusive write access using skipped lock mechanisms.',
        'Designed and developed interactive and responsive web applications using React, creating reusable components and managing state effectively.',
        'Employed test-driven development (TDD) principles for writing testable and maintainable code, improving code quality and application stability.',
        'Created and managed CI/CD workflows, automated builds, tests, and deployments using Jenkins and GitLab.',
        'Automated the software deployment process, ensuring efficient and error-free deployments.',
        'Collaborated with cross-functional teams to gather and analyze requirements, ensuring that software solutions met business objectives effectively.',
        'I work collaboratively, utilizing my strong verbal communication skills to tackle technical challenges and conduct research, ultimately driving innovative solutions to address market needs.',
        ]
    },
    {
        id:1,
        role:'Software Developer(Full Stack)',
        Location: 'Hyderabad, India',
        workDate: '05/2019 – 08/2021',
        jobContent: 
        [ 
            'Demonstrated expertise in utilizing Spring Boot to rapidly develop and deploy RESTful services, leveraging its convention-over-configuration approach and built-in containerization capabilities. Strong understanding of the Spring frameworks core concepts, such as dependency injection, inversion of control, and aspect-oriented programming, enabling the development of modular and maintainable code.',
            'Worked with tools such as Maven, Gradle, and Git to manage project dependencies, automate build processes, and maintain version control.',
            'Gained expertise in J2EE components, including Servlets, JSP, EJB, and JDBC. Successfully integrated these components into the applications to achieve desired functionalities and performance.',
            'Developed and deployed enterprise-level Java applications on application servers like WebSphere and WebLogic, utilizing advanced features and configurations to ensure seamless performance, scalability, and reliability.',
            'Experienced in developing and deploying applications to cloud platforms(AWS, Azure, GCP) using technologies like Docker, Kubernetes, and Jenkins, ensuring high availability and scalability of applications.',
            'Integrated Splunk and Dynatrace for comprehensive CI/CD pipeline monitoring, ensuring seamless deployments while proactively detecting application performance regressions.',
            'Hands-on experience in implementing serverless architectures using AWS Lambda, API Gateway, and DynamoDB, enabling efficient and cost-effective application development.',
            'Solid understanding of AWS networking concepts, including VPC, subnets, route tables, and security groups, ensuring secure and isolated environments for applications.',
            'Proficient in leveraging AWS database services like RDS, DynamoDB, and Redshift for efficient data storage, retrieval, and management.',
        ]
    },
    {
        id: 2,
        role: 'Software Engineer',
        Location: 'Hyderabad, India',
        workDate: '05/2019 – 08/2021',
        jobContent: [
            'Gained foundational knowledge of software engineering principles and best practices, including how to write efficient and maintainable code. Enhanced logic writing through problem-solving exercises.',
            'Gained expertise in utilizing Enterprise JavaBeans (EJB), Java Servlets, and Extensive Markup Language (XML) to develop robust and scalable enterprise-level applications, ensuring efficient data exchange, modular architecture, and seamless integration.',
            'Worked in an Agile development environment and collaborated with other developers to develop and implement various applications using JavaScript, HTML, CSS, Bootstrap and the Angular framework.',
            'Solid understanding of version control systems like Git, enabling effective collaboration, code review, and seamless integration with CI/CD pipelines.',
            'As part of my internship, I developed a custom web application using the Angular framework that improved the efficiency of our team\'s workflow by automating several manual processes. The application was used by over 50 team members and resulted in a 25% increase in productivity.',
            'My approach to innovation involves a systematic process of experimentation, thorough documentation, and data analysis, which supports collaborative efforts to build compelling business cases for problem-solving.',
        ]
    }
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
                <h1 className="experience-header">Professional Experience</h1>
                <div className="experience-data">
                    <div className="experience-names">
                        {companyName.map(item => <p key={item.id} 
                        onClick={this.sendId = () => this.updateID(item.id)} 
                        className={`company-name ${activeId === item.id ? activeTab : ''}`}>{item.companyName}</p>)}
                    </div>
                    <div className="company-content">
                        <h3>{companyContent[activeId].role}</h3>
                        <p>{companyContent[activeId].workDate}</p>
                        <p>{companyContent[activeId].Location}</p>
                        <div className="job-content-scrollable">
                        {companyContent[activeId].jobContent.map(
                            item => <p key={item}>{<RiArrowDropRightLine className="arrows"/>} {item}</p>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;