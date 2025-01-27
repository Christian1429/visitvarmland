import "./timeinput.css";
function Timeinput() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <article className="timeinput">
        <input
          className="timeinput__input"
          id="time-input"
          type="text"
          onChange={handleChange}
          placeholder="10:00-15:30"
        />
      </article>
    </>
  );
}

export default Timeinput;
