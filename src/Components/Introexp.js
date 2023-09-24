import Projectlist from "./Projectlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import {  faMagnifyingGlass, faComputer, faFilePen } from "@fortawesome/free-solid-svg-icons";


const Introexp = () => {

    return (
        <div className="row">
          {Projectlist.map((exp, index) => (
            <div id="text" className="col-lg-5" key={index}>
              <p id="font-weight">{exp.title}</p>
              <p><FontAwesomeIcon id="icon" icon={faComputer} />{exp.tech}</p>
              <p><FontAwesomeIcon id="icon" icon={faFilePen} />{exp.desc}</p>

            </div>
          ))}
        </div>
      );

}

export default Introexp;
