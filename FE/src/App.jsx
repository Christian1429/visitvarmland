import Form from "./pages/Form";
import { FormDataProvider } from "./context/FormDataContext";
import Price from "./components/Price";
import "./i18n";

function App() {
  return (
    <FormDataProvider>
      <Form />
      <Price />
    </FormDataProvider>
  );
}

export default App;
