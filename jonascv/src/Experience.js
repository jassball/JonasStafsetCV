import Navbar from "./Navbar";
import "./Styles/Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import {  faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Streamdream from "./images/Streamdream.png";
import CodeImage from "./images/Codeimage.png";
import JavaImage from "./images/javaimage.jpg";
import Maze from "./images/maze.png";


const Experience = () => {
    return (
        <>
        <Navbar />
        <div id="exp" className="container">
        <h1><FontAwesomeIcon icon={faRectangleList}  />     Erfaring </h1> 
       
        <div id="row" className="row">
            
            <div id="text" className="col-lg-4 col-md-6 col-sm-12">
                <h4 className="">Løsning</h4>
                <p>Streamingløsning for mindre streamere</p>
                <p>Nettside som lagrer fotball spillere</p>
                <p>Stemplingssystem for tidsavgrensing</p>
                <p>Mat og kaloriteller</p>
                <p>Unity spill</p>
                
            </div>
        <div id="text" className="col-lg-4 col-md-6 col-sm-12">
            <h4 className="">Teknologi</h4>
            <p>React, C#, HTML, Javascript</p>
            <p>React, C#, HTML, Javascript</p>
            <p>Java</p>
            <p>Kotlin, Postman</p>
            <p>C#, Unity, Blender</p>
        
        </div>
        <div id="text" className="col-lg-4 col-md-6 col-sm-12">
            <h4 className="">Beskrivelse</h4>
            <p>I samarbeid med Vizrt</p>
            <p>Hentet spillere og kunne lagret nye i database</p>
            <p>Ble lagd for å loggføre forsentkomminger</p>
            <p>Oppskrifter fra databaser og beregnet kalorier</p>
            <p>Skrekkspill som baserer seg på overleve labyrint</p>
            </div>
        </div>
            <div className="exp-desc">
                <h1 className="exp-underline"><FontAwesomeIcon icon={faMagnifyingGlass} />   Erfarings beskrivelse</h1>
                <div id="row" className="row ">
                    <div id="exp-desc-text" className="col-md-8">
                        <h4 >Streamingløsning</h4>
                        
                        <p>I gruppeprosjekt fikk vi i case å lage en intuitiv og forenklet
                            variant av Vizrt sine verktøy. Vi designet først siden i Adobe XD, 
                            før vi startet kodingen. Vi tok utgangspunkt i Vizrt sine farger for
                            å skape en gjengående inntrykk, men valgte egen logo siden løsningen 
                            skulle stå på egne ben. For å skille oss ut, måtte vi engasjere 
                            produkteier med en attraktiv UI og funksjoner som de kan utnytte fra
                            deres portefølje.
                        </p>
                        <p>
                            Dette klarte vi såpass godt at produkteier selv sa at dette var noe de
                            kunne solgt. For å oppnå dette hadde vi et strekt grunnlag med smidig 
                            prosess og godt samarbeid. På dette prosjektet var jeg frontend utvikler.
                        </p>

                        <p>Link til github:</p>

                    </div>
                    <div className="col-md-4">
                    <img className="exp-image" src={Streamdream} />
                    </div>
                    <div id="border-top" className="col-md-12"></div>
                    <div id="next-project" className="col-md-8">
                        <h4>Nettside som lagrer fotballspillere</h4>
                        <p>Navnet på prosjektet høres kanskje ikke så spennende ut, men vi lagde en enkel
                            løsning med hjelp av database og local storage. Dette gjorde at jeg fikk et 
                            solid innblikk i database og bruken av local storage. Videre utviklet jeg responsivt 
                            design til siden, noe jeg syns er utrolig spennende. For å lage et komplett produkt 
                            benyttet vi oss også av Bootstrap og Fontawesome.
                        </p>

                        <p> Link til github:
                        </p>
                    </div>
                    <div className="col-md-4"><img className="exp-image" src={CodeImage}/></div>
                    <div id="border-top" className="col-md-12"></div>
                    <div id="next-project" className="col-md-8">
                        <h4>Stemplingssystem</h4>
                        <p>Jugendby barnehage hadde på et tidspunkt en del forsentkomminger. Såpass mange at daglig
                            leder ville få oversikt på omfanget. Dette var en nokså enkel løsning med GUI og innloggingssystem.
                        </p>
                        <p>Link til github:</p>
                    
                    </div>
                    <div className="col-md-4">
                    <img className="exp-image" src={JavaImage} />
                    </div>
                    <div id="border-top" className="col-md-12"></div>

                    <div id="next-project" className="col-md-8">
                    <h4>Mat og Kaloriteller</h4>
                    <p>Android applikasjonen skulle knyttes til en API som hentet oppskrifter og baserte seg fra brukerens
                        selvvalgte kalorimål. Applikasjonen tillater brukere å få favorisere og lagre måltid som gjør den 
                        effektiv i likhet med brukergrensesnittet.
                    </p>
                    <p>Link til github: </p>
                    </div>
                    <div id="border-top" className="col-md-12"></div>
                    <div className="col-md-8">
                    <h4>Unity spill</h4>
                    <p>For å bli bedre kjent med 3D og animasjoner valgte jeg faget Unity utvikling. I dette faget lærte jeg
                        mye om brukeropplevelser og brukergrensesnitt. På gruppeprosjekt eksamen, samlet vi alt vi hadde lært
                        og lagde et spill som nå blir brukt som demo i undervisning. 
                    </p>
                    <p>
                        Link til Github: 
                    </p>
                    </div>
                    <div className="col-md-4">
                    <img className="exp-image" src={Maze} />
                    </div>
                </div>
            </div>
        </div>
     

        </>
    );
}

export default Experience;