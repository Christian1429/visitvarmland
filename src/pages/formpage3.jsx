import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../assets/Arrow-Pointing-Left.png";
import CheckMark from "../assets/Check-Mark.png";
import "./Formpage3.css";

function Formpage3() {
  const [IsKontaktUppgifterVisible, SetKontaktUppgifterVisible] =
    useState(false);
  const [IsOvrigInfoVisible, SetOvrigInfoVisible] = useState(false);
  const [IsTillganglighetVisible, SetTillganglighetVisible] = useState(false);
  const [IsKontaktPersonVisible, SetKontaktPersonVisible] = useState(false);

  const [IsGDPRChecked, SetGDPRChecked] = useState(false);

  const toggleKontaktUppgifter = () => {
    SetKontaktUppgifterVisible(!IsKontaktUppgifterVisible);
  };

  const toggleOvrigInfo = () => {
    SetOvrigInfoVisible(!IsOvrigInfoVisible);
  };

  const toggleTillganglighet = () => {
    SetTillganglighetVisible(!IsTillganglighetVisible);
  };

  const toggleKontaktPerson = () => {
    SetKontaktPersonVisible(!IsKontaktPersonVisible);
  };

  const toggleGDPR = () => {
    SetGDPRChecked(!IsGDPRChecked);
  };

  return (
    <>
      <main className="main-formpage">
        <h1 className="main-formpage__header">Steg 3</h1>

        <form className="main-formpage__form">
          <h2
            className="main-formpage__form-header"
            onClick={toggleKontaktUppgifter}
          >
            Kontaktuppgifter för besökare:
          </h2>
          {IsKontaktUppgifterVisible && (
            <input
              className="main-formpage__form-input"
              placeholder="Fyll i kontaktuppgifter"
            />
          )}
        </form>

        <form className="main-formpage__other-form">
          <h2
            className="main-formpage__other-form-header"
            onClick={toggleOvrigInfo}
          >
            Övrig information:
          </h2>
          {IsOvrigInfoVisible && (
            <input
              className="main-formpage__other-form-input"
              placeholder="Lägg till övrig information"
            />
          )}
        </form>

        <form className="main-formpage__accessibility-form">
          <h2
            className="main-formpage__accessibility-form-header"
            onClick={toggleTillganglighet}
          >
            Tillgänglighet på platsen:
          </h2>
          {IsTillganglighetVisible && (
            <input
              className="main-formpage__accessibility-form-input"
              placeholder="Fyll i tillgänglighet (ramper, hissar, etc.)"
            />
          )}
        </form>

        <form className="main-formpage__contact-info-form">
          <h2
            className="main-formpage__contact-info-form-header"
            onClick={toggleKontaktPerson}
          >
            Dina kontaktuppgifter som uppgiftslämnare:
          </h2>
          {IsKontaktPersonVisible && (
            <>
              <input
                className="main-formpage__contact-info-input--left"
                placeholder="Kontaktperson"
              />
              <input
                className="main-formpage__contact-info-input--left"
                placeholder="Gatuadress"
              />
              <input
                className="main-formpage__contact-info-input--right"
                placeholder="Telefonnummer"
              />
              <input
                className="main-formpage__contact-info-input--right"
                placeholder="E-post"
              />
            </>
          )}
        </form>
        <form className="main-formpage__gdpr-form">
          <label className="main-formpage__gdpr-label">
            <input
              type="checkbox"
              checked={IsGDPRChecked}
              onChange={toggleGDPR}
              className="main-formpage__gdpr-checkbox"
            />
            Jag samtycker till GDPR och hantering av personuppgifter
          </label>
        </form>
        <Link to="/Formpage2">
          <img src={BackArrow}></img>
        </Link>
        <Link to="/">
          <img src={CheckMark}></img>
        </Link>
      </main>
    </>
  );
}

export default Formpage3;
