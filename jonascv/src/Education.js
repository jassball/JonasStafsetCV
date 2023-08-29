import Navbar from "./Navbar";
import './Styles/Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap, faLanguage } from "@fortawesome/free-solid-svg-icons";




const Education = () => {
    return (
        <>
        <Navbar />
        <div id="edu" className="container">
      
        <h1><FontAwesomeIcon icon={faGraduationCap} />    Utdannelse</h1>
        <div className="row">
            <div id="education" className="col-md-3 col-xs-6"><h4>Skole</h4></div>
            <div id="education" className="col-md-3 col-xs-6"><h4>Grad</h4></div>
            <div id="education" className="col-md-3 col-xs-63"><h4>Detaljer</h4></div>
            <div id="education" className="col-md-3 col-xs-6"><h4>Periode</h4></div>
            <div id="education" className="col-md-3 col-xs-6"><p>Høyskolen Kristiania</p></div>

            <div id="education" className="col-md-3 col-xs-6"><p>Bachelor i IT: Frontend- og mobilutvikling</p></div>

            <div id="education" className="col-md-3 col-xs-6"><p>Tre års bachelorgrad bestående av opplæring i digital 
                teknologi, webutvikling, brukertesting, interaksjonsdesign og webutvikling.
                Gjennom studiet har jeg jobbet med reelle kundecaser som Vizrt. Jeg har vært 
                med på å planlegge og gjennomføre en prosjektcase i en tverrfaglig gruppe, og 
                fått trening i å bruke moderne verktøy og teknikker.</p></div>


            <div className="col-md-3 col-xs-6"><p>2021-2024</p></div>

        </div>
        <div className="row">
            <h1 className="lang"><FontAwesomeIcon icon={faLanguage} /> Språk</h1>
            <div id="lang-desc" className="col-md-6"><h4>Navn</h4></div>
            <div id="lang-desc" className="col-md-6"><h4>Språk</h4></div>
            <div className="col-md-6"><p>Norsk</p></div>
            <div className="col-md-6"><p>Flytende/Morsmål</p></div>

            <div className="col-md-6"><p>Engelsk</p></div>
            <div className="col-md-6"><p>Flytende</p></div>
       </div>




        </div>
        </>
    );
}

export default Education;