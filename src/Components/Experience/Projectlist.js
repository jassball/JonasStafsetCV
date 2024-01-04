import Streamdream from "../images/Streamdream.png";
import CodeImage from "../images/Codeimage.png";
import Maze from "../images/maze.png";
import Android from "../images/android.jpg";
import MyCV from "../images/JonasStafsetCV.png";
import SwiftImage from "../images/Recipes.jpeg";
import VueIonic from "../images/VueIonic.jpeg";


const Experiences = [
  {
    title: "Streamingløsning for mindre streamere",
    tech: "React, C#, HTML, Javascript",
    desc: "I samarbeid med Vizrt",
    longDesc:
      "I gruppeprosjekt fikk vi i case å lage en intuitiv og forenklet variant av Vizrt sine verktøy. Vi designet først siden i Adobe XD, før vi startet kodingen. Vi tok utgangspunkt i Vizrt sine farger for å skape en gjengående inntrykk, men valgte egen logo siden løsningen skulle stå på egne ben. For å skille oss ut, måtte vi engasjere produkteier med en attraktiv UI og funksjoner som de kan utnytte fra deres portefølje.",
    github:
      "https://github.com/jassball/Projects/tree/main/StreamDream%20-%20Webdev",
    image: Streamdream,
  },
  {
    title: "Nettside som lagrer fotball spillere",
    tech: "React, C#, HTML, Javascript",
    desc: "Hentet spillere og lagret nye i database",
    longDesc:
      "Dette klarte vi såpass godt at produkteier selv sa at dette var noe de kunne solgt. For å oppnå dette hadde vi et strekt grunnlag med smidig prosess og godt samarbeid. På dette prosjektet var jeg frontend utvikler.",
    github: "https://github.com/jassball/Projects/tree/main/Webdev%20-%20Games",
    image: CodeImage,
  },
  {
    title: "Mat og kaloriteller",
    tech: "Kotlin, Postman",
    desc: "Oppskrifter fra databaser og beregnet kalorier",
    longDesc:
      "Android applikasjonen skulle knyttes til en API som hentet oppskrifter og baserte seg fra brukerens selvvalgte kalorimål. Applikasjonen tillater brukere å få favorisere og lagre måltid som gjør den effektiv i likhet med brukergrensesnittet.",
    github: "https://github.com/jassball/Android-App-Project-H2022",
    image: Android,
  },
  {
    title: "Unity spill",
    tech: "C#, Unity, Blender",
    desc: "Skrekkspill som baserer seg på overleve labyrint",
    longDesc:
      "For å bli bedre kjent med 3D og animasjoner valgte jeg faget Unity utvikling. I dette faget lærte jeg mye om brukeropplevelser og brukergrensesnitt. På gruppeprosjekt eksamen, samlet vi alt vi hadde lært og lagde et spill som nå blir brukt som demo i undervisning.",
    github:
      "https://github.com/jassball/Projects/tree/main/MazeEscape%20-%20Unity%20game",
    image: Maze,
  },
  {
    title: "Nettside med portefølje",
    tech: "React, CSS, Firebase, Bootstrap, Fontawesome",
    desc: "Nettside med portefølje",
    longDesc:
      "Nettside med portefølje for kontinuerlig utvikling og framvisning av portefølje.",
    github: "https://github.com/jassball/JonasStafsetCV",
    image: MyCV,
  },
  {
    title: "Oppskriftskatalog i Swift",
    tech: "SwiftUI, SwiftData, SwiftCore",
    desc: "Oppskriftskatalog i Swift",
    longDesc: "Oppskriftskatalog som henter oppskrifter fra API og lagrer dem lokalt på enheten. Dette ble gjort med Xcode versjon 15, som var ny på utviklingstidspunktet.",
    github: "https://github.com/jassball/RecipeApp",
    image: SwiftImage,
  },
  {
    title: "Bildedelingsapplikasjon",
    tech: "Vue, Ionic, Firebase, Typescript, Javascript, Capacitor",
    desc: "Bildedelingsapplikasjon laget for IOS og Android",
    longDesc: "Applikasjon med innloggings- og registreringssystem. Applikasjonen har også en funksjon for å laste opp bilder og dele dem med andre brukere. Videre kan brukere reagere og kommentere på hverandres innlegg som blir lagret i databasen. Applikasjonen er laget med Vue og Ionic.",
    github: "https://github.com/jassball/TripAppVue",
    image: VueIonic,
  }
];

export default Experiences;
