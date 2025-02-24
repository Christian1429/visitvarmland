import Form from "./pages/Form";
import { FormDataProvider } from "./context/FormDataContext";
import "./i18n";

function App() {
  return (
    <FormDataProvider>
      <Form />
    </FormDataProvider>
  );
}

export default App;
