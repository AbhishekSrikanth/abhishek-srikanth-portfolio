import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";

function ContentContainer ({ currentContent }) {

    const componentMap = {
        "Home": <About/>,
        "Skills": <Skills/>,
        "Projects": <About/>,
        "Experience": <Experience/>,
        "Recommendations": <About/>,
        "Awards": <About/>,
        "Education": <About/>
    }

    return (
        <div className="h-4/6 flex m-5 overflow-scroll">
            {componentMap[currentContent]}
        </div>
    );
}

export default ContentContainer;