import Form from './pages/Form'
import { FormDataProvider } from './context/FormDataContext';

function App() {

  return (
    <FormDataProvider>
      <Form />
    </FormDataProvider>
  );
}

export default App
