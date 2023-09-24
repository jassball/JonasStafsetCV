import Navbar from "./Navbar";
import "./Styles/Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import Introexp from "./Components/Introexp"; 
import {  faMagnifyingGlass, faComputer, faFilePen } from "@fortawesome/free-solid-svg-icons";
import Desceexp from "./Components/Descexp";





const Experience = () => {
    return (
        <>
        <Navbar />
        <div  id="exp" className="container">
            <h1><FontAwesomeIcon icon={faRectangleList}  />     Erfaring </h1> 
       
                            <Introexp />
                        <div className="exp-desc">
                            <Desceexp />

                        </div>
        </div>
        </>
    );
}

export default Experience;