import "../Styles/Experience.css";
import Introexp from "./Introexp";
import Desceexp from "./Descexp";
import Transitions from "../Transitions";

const Experience = () => {
  return (
    <>
      <div id="exp" className="container">
        <Introexp />
        <div className="exp-desc">
          <Desceexp />
        </div>
      </div>
    </>
  );
};

export default Experience;
