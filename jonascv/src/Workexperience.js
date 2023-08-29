import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {  faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './Styles/work-experience.css';


const Workexperience = () => {
    return (
        <>
        <Navbar />
        <div id="work-exp" className="container">
        <h1><FontAwesomeIcon icon={faBriefcase} />     Yrkeserfaring</h1>

        <div className="row">
            <div id="work" className="col-md-4">
                <h4>Periode</h4>
                <p>06.2022 - </p>
                <p>06.2021 - 07.2022</p>
                <p>12.2017 - 07.2022</p>
                <p>02.2016 - 12.2017</p>
                
            </div>
            <div  id="work" className="col-md-4">
                <h4>Arbeidsgiver</h4>
                <p>Power Norge AS</p>
                <p>Jugendby Barnehage </p>
                <p>H.I Giørtz AS</p>
                <p>Coop Obs</p>
                
            </div>
            <div  id="work" className="col-md-4">
                <h4>Stilling</h4>
                <p>Selger / NK</p>
                <p>Barnehageassistent</p>
                <p>Plukker / høytløfter</p>
                <p>Butikkmedarbeider</p>
              
            </div>
            <div className="work-desc row">
        <h1 className=""><FontAwesomeIcon icon={faMagnifyingGlass} />
        Yrkeserfaring - detaljer</h1>
        
        {/* Spacer */}
        <div className="col-md-2"></div>
        <div id="work-details" className="col-md-4 blue-h5">
            <h5 className>Arbeidsgiver: </h5>
            <h5>Stiling: </h5>
            <h5>Periode:  </h5>

            
        </div>
        <div id="work-details" className="col-md-6 heavy-h5">
        <h5>Power Norge AS </h5>
            <h5>Selger /  NK </h5>
            <h5>06.2022 -  </h5> </div>
       
         {/* Spacer */}
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <p>Selger med utvidet ansvar. Arbeid med å hjelpe kunder, følge de opp 
                og sørge for at de får hjelpen de trenger. Opprettholde butikkstandard 
                og medansvarlig for at butikken når budsjett.  </p>
        </div>
        <div id="border-bottom" className="col-md-12"></div>

         {/* Spacer */}
         <div className="col-md-2"></div>
        <div id="work-details" className="col-md-4 blue-h5">
            <h5 className>Arbeidsgiver: </h5>
            <h5>Stiling: </h5>
            <h5>Periode:  </h5> </div>

        <div id="work-details" className="col-md-6 heavy-h5">
        <h5>Jugendby Barnehage </h5>
            <h5>Barnehageassistent</h5>
            <h5>06.2021 - 07.2022  </h5> </div>
        </div>
         {/* Spacer */}
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <p></p>
        </div>
        <div id="border-bottom" className="col-md-12"></div>

        
         {/* Spacer */}
         <div className="col-md-2"></div>
        <div id="work-details" className="col-md-4 blue-h5">
            <h5 className>Arbeidsgiver: </h5>
            <h5>Stiling: </h5>
            <h5>Periode:  </h5> </div>

        <div id="work-details" className="col-md-6 heavy-h5">
        <h5>H.I. Giørtz AS </h5>
            <h5>Plukker/høytløfter</h5>
            <h5>12.2017 - 07.2022  </h5> </div>
       
         {/* Spacer */}
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <p>Lagermedarbeider med utvidet ansvar på kveld og i helger. </p>
        </div>
        <div id="border-bottom" className="col-md-12"></div>

         {/* Spacer */}
         <div className="col-md-2"></div>
        <div id="work-details" className="col-md-4 blue-h5">
            <h5 className>Arbeidsgiver: </h5>
            <h5>Stiling: </h5>
            <h5>Periode:  </h5> </div>

        <div id="work-details" className="col-md-6 heavy-h5">
        <h5>Coop Obs</h5>
            <h5>Butikkmedarbeider</h5>
            <h5>02.2016 - 12.2017  </h5> </div>
       
         {/* Spacer */}
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <p></p>
        </div>
        <div id="border-bottom" className="col-md-12"></div>





        
       
       
       
           
       </div>
        </div>
        
       
        </>
    );
} 

export default Workexperience;