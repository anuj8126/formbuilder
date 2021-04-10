import React from "react";
import FormComponent from "./Components/Formcomponent";
import { template } from "./Components/Template";

const FormDataContext = React.createContext();

function App() {
  return (
    <FormDataContext.Provider value={template}>
      <div className="App">
        <FormComponent />
      </div>
    </FormDataContext.Provider>
  );
}

export default App;
export { FormDataContext };
