import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./kalender.css";
import Kalenderbild from "../assets/Calendar-31.png";
import Closewindow from "../assets/Close-Window.png";

function Kalender() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };

  return (
    <>
      <article className="kalender-container">
        <section className="image-container">
          <img src={Kalenderbild} alt="Kalender" className="kalender-image" />
          <h2 className="kalender-header">Datum och tid</h2>
          <img src={Closewindow} alt="Close" className="closewindow" />
        </section>
        <Calendar onChange={onChange} value={date} />
      </article>
    </>
  );
}

export default Kalender;
