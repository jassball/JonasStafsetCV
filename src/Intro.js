import "./Components/Styles/CVs.css";
import Navbar from "./Components/Navbar";
import Transitions from "./Components/Transitions";

const Intro = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div id="flex-row" className="row">
        <div id="sideBar" className="col-lg-3">
          <h5>Kvalifikasjoner:</h5>
          <p>
            Smidig utvikling, Målrettet, Effektiv, Kundehåndtering, Scrum,
            Smidig metodikk, Brukertesting, Brukeropplevelse, Responsivt design,
            Prototyping.
          </p>

          <h5>Programmeringskompetanse:</h5>
          <p>
            Javascript, Kotlin, Java, C#, Vue, Ionic, HTML5, CSS, Swift, React
            Native, MySQL, React.js, SwiftUI
          </p>

          <h5>Teknologikompetanse:</h5>
          <p>
            Unity, blender, Adobe XD, Figma, Adobe Photoshop, Wordpress, Git,
            Microsoft Office 365, UX, Google Cloud Platform, App Store Connect,
            Google Firebase
          </p>
        </div>
        <div id="about" className="col-lg-3">
          <h1>Jonas Willmann Stafset</h1>
          <h3>Fullstack developer</h3>
          <h4>Jonas@wstafset.no</h4>
          <h4>+47 413 660 19</h4>
        </div>

        <div id="intro" className="col-lg-4">
          <p>
          Gjennom skolen og prosjekter på fritiden har jeg lært meg en rekke spennende teknologier. 
          Full-stack utvikling av nettsider, native utvikling av applikasjoner og database håndtering 
          er bare noe av det jeg kan så langt. Samtidig har jeg en enorm vilje for å tilegne meg ny 
          kunnskap og syns det er utrolig spennende å prøve seg på et nytt felt.
          </p>

          <p>
          Min evne til å analysere komplekse problemer har gjentatte ganger ført
          til innovative og funksjonelle løsninger. Jeg tror på kraften av informerte beslutninger, 
          og tar alltid hensyn til data og nøye analyse før jeg trekker konklusjoner. Som lagspiller 
          er jeg engasjert i å dele ideer og kunnskap. Jeg er dedikert til ikke bare å arbeide sammen 
          med kolleger, men også til å oppmuntre og inspirere til samarbeid for å oppnå best mulige resultater.
          </p>

          <p>
          Med min omfattende erfaring i kundeservice, har jeg utviklet en dyp forståelse 
          for kundenes unike behov. Denne kunnskapen har gjort det mulig for meg å bygge sterke 
          og varige kundeforhold, og i denne prosessen har jeg finslipt mine ferdigheter i effektiv 
          kundehåndtering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
