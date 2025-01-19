import Form from "./pages/Form";
import Arrangor from "./pages/arrangor";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/arrangor" element={<Arrangor />} />
      </Routes>
    </>
  );
}

export default App;
