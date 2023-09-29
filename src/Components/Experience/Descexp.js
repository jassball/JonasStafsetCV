import Experiences from "./Projectlist";
import {  faMagnifyingGlass, faComputer, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Styles/Experience.css"


const Desceexp = () => {

  return (
    <div id="row" className="row">
        <h1 className="exp-underline"><FontAwesomeIcon icon={faMagnifyingGlass} />   Erfarings beskrivelse</h1>
          {Experiences.map((exp, index) => (
            <>
            <div id="next-project" className="col-md-8 hidden" key={index}>
                  <h4 id="font-weight">{exp.title}</h4>
                  <p className="p-experience">{exp.tech}</p>
                  <p className="p-experience">{exp.longDesc}</p>
                  <a id="git" className="p-experience" href={exp.github}>GitHub Link</a>
            </div>
                <div className="col-lg-4 col-md-8 hidden">
                      <img className="exp-image" src={exp.image} alt={exp.title} />
                  </div>
                  <div id="border-bottom" className="col-md-12"></div>
                  </>
            

          ))}
        </div>
  );
}

export default Desceexp;