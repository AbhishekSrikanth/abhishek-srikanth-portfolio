import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import UnderConstruction from "./UnderConstruction";
import Awards from "./Awards";

function ContentContainer ({ currentContent }) {

    const componentMap = {
        "Home": <About/>,
        "Skills": <Skills/>,
        "Projects": <UnderConstruction/>,
        "Experience": <Experience/>,
        "Recommendations": <UnderConstruction/>,
        "Awards": <Awards/>,
        "Education": <Education/>
    }

    return (
        <div className="h-4/6 flex m-5 overflow-scroll">
            {componentMap[currentContent]}
        </div>
    );
}

export default ContentContainer;