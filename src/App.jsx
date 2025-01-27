import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Wermland from "./assets/visit-varmland-start-1.jpg";
import Formpage1 from "./pages/formpage1";
import Formpage2 from "./pages/formpage2";
import Formpage3 from "./pages/formpage3";

function App() {
  return (
    <main className="main-container">
      <img src={Wermland} alt="Visit Värmland" className="bg-image" />
      <Header />
      <Routes>
        <Route path="/" element={<Formpage1 />} />
        <Route path="/Formpage1" element={<Formpage1 />} />
        <Route path="/formpage2" element={<Formpage2 />} />
        <Route path="/Formpage3" element={<Formpage3 />} />
      </Routes>
    </main>
  );
}

export default App;
