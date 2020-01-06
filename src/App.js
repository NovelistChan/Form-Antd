import React from "react";
import Form from "./components/form";
import information from "./information";

const extensionsForm = {
  date: props => <div>{JSON.stringify(props.formData)}</div>
};

const extensionsDefault = {
  date: _ => "2000-1-1"
};

function App() {
  return (
    <div className="App">
      <Form
        schema={information}
        onChange={data => {}}
        extensions={{ fields: extensionsForm, default: extensionsDefault }}
      />
    </div>
  );
}

export default App;
