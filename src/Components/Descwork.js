import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Worklist from './Worklist';
import "../Styles/work-experience.css";
const Descwork = () => {

    return (
        <>
        <h1 className="work-underline"><FontAwesomeIcon icon={faMagnifyingGlass} />  Yrkeserfaring beskrivelse</h1>
          <div className="work-desc row">
            {Worklist.map((work, index) => (
              <div id="work-details" className="work-details" key={index}>
                <h5>Arbeidsgiver:<span className='whitespace'>{work.company}</span></h5>
                <h5>Stilling: <span className='whitespace2'>{work.position}</span> </h5>
                <h5>Periode: <span className='whitespace3'>{work.period}</span></h5>
                <p>{work.description}</p>
              </div>
           
            ))}
          </div>
          </>
        );


}

export default Descwork;