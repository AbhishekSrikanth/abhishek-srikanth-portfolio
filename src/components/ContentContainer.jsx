import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Awards from "./Awards";
import Recommendations from "./Recommendations";
import Projects from "./Projects";

function ContentContainer ({ currentContent }) {

    const componentMap = {
        "Home": <About/>,
        "Skills": <Skills/>,
        "Projects": <Projects/>,
        "Experience": <Experience/>,
        "Recommendations": <Recommendations/>,
        "Awards": <Awards/>,
        "Education": <Education/>
    }

    return (
        <div className="h-[83.33%] flex m-5 overflow-auto">
            {componentMap[currentContent]}
        </div>
    );
}

export default ContentContainer;