import Navbar from "./Navbar";
import './Styles/Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap, faLanguage, faSchool, faFilePen, faCalendar } from "@fortawesome/free-solid-svg-icons";





const Education = () => {
    return (
        <>
        <Navbar />
        <div id="edu" className="container">
      
        <h1><FontAwesomeIcon icon={faGraduationCap} />    Utdannelse</h1>
        <div id="" className="row" >
            <div id="edu-cards" className="col-lg-5 col-md-12">
                <p>
                        <FontAwesomeIcon id="icon" icon={faSchool} />Høyskolen Kristiania</p>
                    <p>
                        <FontAwesomeIcon id="icon" icon={faGraduationCap} />Bachelor i IT: Frontend- og mobilutvikling</p>
                        <p><FontAwesomeIcon id="icon" icon={faFilePen} />
                        Tre års bachelorgrad bestående av opplæring i digital 
                        teknologi, webutvikling, brukertesting, interaksjonsdesign og webutvikling.
                        Gjennom studiet har jeg jobbet med reelle kundecaser som Vizrt. Jeg har vært 
                        med på å planlegge og gjennomføre en prosjektcase i en tverrfaglig gruppe, og 
                        fått trening i å bruke moderne verktøy og teknikker.</p>
                        <p><FontAwesomeIcon id="icon" icon={faCalendar} />2021-2024</p>
                </div>

                <div id="edu-cards" className="col-lg-5 col-md-12">
                    <p><FontAwesomeIcon id="icon" icon={faSchool} />Ålesund VGS: Latin avdeling</p>
                        <p><FontAwesomeIcon id="icon" icon={faGraduationCap} />Studiespesialisering med bedriftsutvikling 
                        og entreprenørskap</p>
                            <p><FontAwesomeIcon id="icon" icon={faFilePen} />
                            Studiespesialisering med fokus på bedriftsutvikling og entreprenørskap. Vi samarbeidet 
                            nært med det lokale næringslivet når vi fikk i oppgave å opprette en studentbedrift. 
                            Med bedriften ble vi sendt på messer for å presentere konseptet og fikk god innføring
                            i hvordan det er å være egen arbeidsgiver. </p>

                            <p><FontAwesomeIcon id="icon" icon={faCalendar} />2016-2019</p>
                </div>

                </div>


        
   
       
            <h1 className="lang"><FontAwesomeIcon icon={faLanguage} /> Språk</h1>
            <div id="lang-card" className="row d-flex">
            <div  className="d-flex">
            <p className="col-md-6 col-sm-3 col-xs-2">Norsk</p>
           <p className="col-md-6 col-sm-3 col-xs-2">Flytende/Morsmål</p>
           </div>

            <div className="d-flex">
            <p className="col-md-6 col-sm-3 col-xs-2">Engelsk</p>
            <p className="col-md-6 col-sm-3 col-xs-2">Flytende</p>
            </div>
   
        </div>



        </div>
        </>
    );
}

export default Education;