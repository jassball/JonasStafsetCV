import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faBriefcase, faCalendar, faBuilding, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Worklist from './Worklist';

const Introwork = () => {

    return (
      <>
      <h1><FontAwesomeIcon icon={faBriefcase} />  Yrkeserfaring</h1>
        <div className="row">
          {Worklist.map((work, index) => (
            <div id="text" className="col-lg-5" key={index}>
              <p id="font-weight"><FontAwesomeIcon id="icon" icon={faBuilding} />{work.company}</p>
              <p><FontAwesomeIcon id="icon" icon={faUserGear} />{work.position}</p>
              <p><FontAwesomeIcon id="icon" icon={faCalendar} />{work.period}</p>

            </div>
         
          ))}
        </div>
        </>
      );

}

export default Introwork;
