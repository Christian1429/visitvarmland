import { useState } from "react";
import { Link } from "react-router-dom";
import UploadIcon from "../assets/Upload.png";
import BackArrow from "../assets/Arrow-Pointing-Left.png";
import ForwardArrow from "../assets/Arrow.png";
import "./formpage2.css";

function Formpage2() {
  const Kategorier = [
    "Kategori 1",
    "Kategori 2",
    "Kategori 3",
    "Kategori 4",
    "Kategori 5",
    "Kategori 6",
    "Kategori 7",
    "Kategori 8",
  ];
  const [isKategorierVisible, setKategorierVisible] = useState(false);
  const toggleKategorier = () => {
    setKategorierVisible(!isKategorierVisible);
  };
  const [isUploadefilesVisible, SetUploadedfilesvisible] = useState(false);
  const toggleUploadedfiles = () => {
    SetUploadedfilesvisible(!isUploadefilesVisible);
  };
  const [isPriserVisible, SetisPriserVisible] = useState(false);
  const tooglepriser = () => {
    SetisPriserVisible(!isPriserVisible);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const Uploadedfiles = [
    "Fil1",
    "Fil2",
    "Fil3",
    "Fil4",
    "Fil5",
    "Fil6",
    "Fil7",
    "Fil8",
    "Fil9",
    "Fil10",
    "Bild1",
    "Bild2",
    "Bild3",
    "Bild4",
  ];

  return (
    <>
      <main className="formpage">
        <h2 className="formpage__title">Steg 2</h2>
        <form className="formpage__form">
          <p onClick={toggleKategorier} className="formpage__select-label">
            Kategorier:
          </p>
          {isKategorierVisible && (
            <select className="formpage__select">
              {Kategorier.map((kategori, index) => (
                <option key={index} value={kategori}>
                  {kategori}
                </option>
              ))}
            </select>
          )}
        </form>
        <form className="formpage-upload">
          <p className="form-paragraph-upload" onClick={toggleUploadedfiles}>
            Ladda up filer:
          </p>
          {isUploadefilesVisible && (
            <select className="form-fileselector">
              {Uploadedfiles.map((file, index) => (
                <option key={index} value={file}>
                  {file}
                </option>
              ))}
            </select>
          )}
          <>
            <img src={UploadIcon}></img>
          </>
        </form>
        <section className="description-container">
          <h2 className="description-header">Beskrivning av evenemanget:</h2>
          <form className="description-form">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              doloremque dignissimos aliquid, quia neque praesentium voluptatem
              consequuntur assumenda impedit, inventore suscipit ullam.
              Obcaecati vero, soluta voluptate praesentium vitae ipsum tempore!
            </p>
          </form>
        </section>
        <section className="price-container">
          <h2 className="header-price" onClick={tooglepriser}>
            Priser
          </h2>
          {isPriserVisible && (
            <>
              <input
                id="expandable-input"
                className="priser-input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Vänligen skriv in priser och dylikt här"
              />
            </>
          )}
        </section>
        <>
          <Link to="/">
            <img src={BackArrow}></img>
          </Link>
          <Link to="/Formpage3">
            <img src={ForwardArrow}></img>
          </Link>
        </>
      </main>
    </>
  );
}

export default Formpage2;
