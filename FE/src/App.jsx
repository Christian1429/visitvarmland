import Form from "./pages/Form";
import { FormDataProvider } from "./context/FormDataContext";
import "./i18n";
import Field from "./components/field";

function App() {
  return (
    <FormDataProvider>
      <Form />
      <Field />
    </FormDataProvider>
  );
}

export default App;
