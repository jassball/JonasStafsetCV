import Navbar from "./Navbar";
import Introwork from "./Components/Introwork";
import Descwork from "./Components/Descwork";


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