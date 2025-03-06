import Form from "./pages/Form";
import { FormDataProvider } from "./context/FormDataContext";
import "./i18n";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <FormDataProvider>
      <ToastContainer/>
      <Form />
    </FormDataProvider>
  );
}

export default App;
