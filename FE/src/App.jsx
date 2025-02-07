import Form from "./pages/Form";
import { FormDataProvider } from "./context/FormDataContext";
import Translatebuttons from "./components/Buttons/translationbutton";
import "./i18n";

function App() {
  return (
    <FormDataProvider>
      <Translatebuttons />
      <Form />
    </FormDataProvider>
  );
}

export default App;
