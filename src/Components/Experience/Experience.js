import Navbar from "../Navbar";
import "../Styles/Experience.css";
import Introexp from "./Introexp"; 
import Desceexp from "./Descexp";





const Experience = () => {
    return (
        <>
        <Navbar />
        <div  id="exp" className="container">
            
       
                            <Introexp />
                        <div className="exp-desc">
                            <Desceexp />

                        </div>
        </div>
        </>
    );
}

export default Experience;