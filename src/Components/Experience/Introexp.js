import Projectlist from "./Projectlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComputer, faFilePen, faLaptopCode } from "@fortawesome/free-solid-svg-icons";


const Introexp = () => {

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <>
      <h1><FontAwesomeIcon icon={faLaptopCode} /> Erfaring </h1> 
        <div className="row">
          {Projectlist.map((exp, index) => (
            <div onClick={() => scrollToSection('#section1')} id="text" className="col-lg-5" key={index}>
              <p id="font-weight">{exp.title}</p>
              <p><FontAwesomeIcon id="icon" icon={faComputer} />{exp.tech}</p>
              <p><FontAwesomeIcon id="icon" icon={faFilePen} />{exp.desc}</p>

            </div>
          ))}
        </div>
        </>
      );

}

export default Introexp;
