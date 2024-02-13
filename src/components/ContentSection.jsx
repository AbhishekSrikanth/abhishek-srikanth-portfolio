import { useState } from "react";
import ContentContainer from "./ContentContainer";
import NavBar from "./NavBar";

function ContentSection () {

    const [currentPage, setCurrentPage] = useState('Home');

    return (
        <div className="w-4/6 bg-black h-screen flex-col shadow-2xl shadow-black">
          <NavBar activeButton={currentPage} onButtonClick={(value) => setCurrentPage(value)}/>
          <ContentContainer currentContent={currentPage} />
        </div>
    );
}

export default ContentSection;