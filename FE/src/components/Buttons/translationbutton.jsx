import { useTranslation } from "react-i18next";

function Translatebuttons() {
  const { i18n } = useTranslation();

  return (
    <>
      <button onClick={() => i18n.changeLanguage("en")}>Engelska</button>
      <button onClick={() => i18n.changeLanguage("sv")}>Svenska</button>
      <button onClick={() => i18n.changeLanguage("de")}>Tyska</button>
    </>
  );
}

export default Translatebuttons;
