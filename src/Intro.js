import './Styles/CVs.css';
import Navbar from './Navbar';

const CVEng = () => {
    return (

        <div className="container-fluid">
           <Navbar />
            <div className="row">
                <div id="sideBar" className="col-md-3">
                    {/* Left side content goes here */}
                    <h5>Kvalifikasjoner:</h5>
                        <p>Smidig utvikling, Målrettet, Effektiv, Kundehåndtering, 
                        Scrum, Smidig metodikk, Brukertesting, Brukeropplevelse, 
                        Responsivt design, Prototyping. </p>

                    <h5>Programmeringskompetanse:</h5>
                        <p>Javascript, Kotlin, Java, C++, HTML5, CSS, Swift, React Native, 
                            MySQL, React.js, SwiftUI</p>

                    <h5>Teknologikompetanse:</h5>
                        <p>Unity, blender, Adobe XD, Figma, Adobe Photoshop, Wordpress,
                            Git, Microsoft Office 365, UX, Google Cloud Platform, 
                            App Store Connect, Google Firebase</p>

             
                    
                </div>   
                    <div id="about" className="col-md-3">
                        <h1>Jonas Willmann Stafset</h1>
                        <h3>Frontend developer</h3>
                        <h4>Jonaswstafset@gmail.com</h4>
                        <h4>+47 413 66 019</h4>
                    </div>

                
                <div id="intro" className="col-md-4">
                    <p>Mitt navn er Jonas Willmann Stafset og jeg er 
                        frontend utvikler. Gjennom en brennende interesse for 
                        teknologi har jeg tilegnet meg kunnskapene som skal til 
                        for å skape gode brukerløsninger og visuelt flotte design.  
                        Våren 2024 er jeg ferdig med Bacheloren 
                        i Frontend- og mobilutvikling hos Høyskolen Kristiania.
                        Her har min intersse fått blomstret videre og gitt meg kompetanse til å 
                        dykke dypere i min lidenskap.
                        </p>

                        <p>I oppdrag med Vizrt var jeg utvikler hvor mitt hovedfokus var å skape et 
                            design som skulle være både brukervennlig og intuitivt. 
                            I løpet av min utdanning har jeg deltatt i flere gruppeprosjekter, noe som har
                            gitt verdifull erfaring med prosjektarbeid i samarbeid med andre. Jeg har
                            blitt omtalt som en effektiv lagspiller og har evnen til å kommunisere og
                            samarbeide godt med andre for å oppnå et felles mål. 
                        </p>

                        <p>Jeg har mange års erfaring fra arbeid med kunder og deres unike behov. Dette
                            har gjort at jeg har utviklet gode kundeforhold og gode evner til kundehåndtering. 
                            
                        </p>
                </div> 
                </div>
                
            </div>
      
    );
}

export default CVEng;
