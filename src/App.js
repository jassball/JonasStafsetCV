import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Intro from "./Intro";
import Experience from "./Components/Experience/Experience";
import Workexperience from "./Components/Work/Workexperience";
import Education from "./Education";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";



function App() {
  
    return(
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/work-experience" element={<Workexperience />} />
                <Route path="/education" element={<Education />} />
            
            </Routes>
            
        </>
 );
};

export default App;