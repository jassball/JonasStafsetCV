import Navbar from "../Navbar";
import Introwork from "./Introwork";
import Descwork from "./Descwork";


const Workexperience = () => {
    return (
        <>
        <Navbar />
        <div id="work-exp" className="container">
          <Introwork />
            <Descwork />
        </div>
       
        </>
    );
} 

export default Workexperience;