import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Intro from "./Intro";
import Experience from "./Experience";
import Workexperience from "./Workexperience";
import Education from "./Education";
import CVEng from "./Intro";


function App() {
  



    return(
        <>
            <Routes>
                <Route path="/" element={<CVEng />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/work-experience" element={<Workexperience />} />
                <Route path="/education" element={<Education />} />
            
            </Routes>
        </>
       

    
        


    );
}

export default App;