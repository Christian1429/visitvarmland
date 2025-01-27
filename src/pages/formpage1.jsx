import Kalenderbild from "../assets/Calendar-31.png";
import Arrow from "../assets/Arrow.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./formpage1.css";
import Kalender from "../components/kalender";
import Timeinput from "../components/timeinput";

function Formpage1() {
  const kommuner = [
    "Arvika",
    "Eda",
    "Filipstad",
    "Forshaga",
    "Grums",
    "Hagfors",
    "Hammarö",
    "Karlstad",
    "Kil",
    "Kristinehamn",
    "Munkfors",
    "Storfors",
    "Sunne",
    "Säffle",
    "Torsby",
    "Årjäng",
  ];

  const arrangörer = [
    "Arrangör1",
    "Arrangör2",
    "Arrangör3",
    "Arrangör4",
    "Arrangör5",
    "Arrangör6",
    "Arrangör7",
    "Arrangör8",
  ];

  const [isArrangörerVisible, setArrangörerVisible] = useState(false);
  const [isKommunerVisible, setKommunerVisible] = useState(false);
  const [isKalenderVisible, setKalenderVisible] = useState(false);
  const [isTimeinputVisible, SetTimeinputVisible] = useState(false);

  const toggleArrangörer = () => {
    setArrangörerVisible(!isArrangörerVisible);
  };
  const toggleKommuner = () => {
    setKommunerVisible(!isKommunerVisible);
  };
  const toggleKalender = () => {
    setKalenderVisible(!isKalenderVisible);
  };
  const toogleTimeinput = () => {
    SetTimeinputVisible(!isTimeinputVisible);
  };

  return (
    <>
      <h2 className="formpage1_h2">Steg 1</h2>
      <section className="formpage-container">
        <p className="formpage-p" onClick={toggleArrangörer}>
          Befintlig arrangör
        </p>
        <p className="formpage-p">Ny arrangör</p>
      </section>
      {isArrangörerVisible && (
        <article className="arrangör-menu">
          <select className="selector" id="arrangörer">
            {arrangörer.map((arrangör, index) => (
              <option className="arrangör-options" key={index} value={arrangör}>
                {arrangör}
              </option>
            ))}
          </select>
        </article>
      )}
      {isKalenderVisible && <Kalender />} {isTimeinputVisible && <Timeinput />}
      <article className="formpage-calender-container">
        <form
          className={`form-when ${isKalenderVisible ? "form-when-active" : ""}`}
          onClick={() => {
            toggleKalender();
            toogleTimeinput();
          }}
        >
          När?
          <img
            src={Kalenderbild}
            alt="Kalender"
            className="kalender-image"
            onClick={() => {
              toggleKalender();
              toogleTimeinput();
            }}
          />
        </form>
      </article>
      <p className="kommun-selector" onClick={toggleKommuner}>
        Vilken kommun är det i?
      </p>
      {isKommunerVisible && (
        <article className="kommuner-menu">
          <label htmlFor="Kommuner">Välj kommun:</label>
          <select id="kommuner">
            {kommuner.map((kommuner, index) => (
              <option className="test" key={index} value={kommuner}>
                {kommuner}
              </option>
            ))}
          </select>
        </article>
      )}
      <section className="event-form">
        <form className="event-form__input-container">
          <label className="event-form__label" htmlFor="event-title">
            Titel på evenemang:
          </label>
          <input
            className="event-form__input"
            id="event-title"
            type="text"
            placeholder="Evenemangstitel"
          />
        </form>
        <Link to="./formpage2">
          <img className="event-form__arrow" src={Arrow} alt="Submit" />
        </Link>
      </section>
    </>
  );
}

export default Formpage1;
