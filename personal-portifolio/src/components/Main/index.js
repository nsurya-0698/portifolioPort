import './index.css';

const Main = () => {
    return(
        <div className="opening-container" id="home">
            <div className="opening-content">
                <p className="intro">Hi, my name is</p>
                <h1 className="name-header">Surya Teja Nammi</h1>
                <h1 className="passion-header">Building Robust Full Stack Solutions</h1>
                <p className="statement">I'm a Software Engineer with 5+ years of expertise in full stack development. I specialize in creating and optimizing platform performance, leading global upgrade projects, and developing robust, scalable applications. Currently, I focus on building accessible, human-centered products.</p>
                <a href="#contact" className="nav-things">
                    <button className="get-in-touch">Get in touch</button>
                </a>
            </div>
        </div>
    )
}

export default Main;