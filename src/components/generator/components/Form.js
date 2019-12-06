import React from "react";
import Package from "./Package";

class Form extends React.Component {
  render() {
    const { schema, onChange } = this.props;

    return (
      <Package
        schema={schema}
        global={{}}
        onChange={updated => onChange && onChange(updated)}
      />
    );
  }
}

export default Form;
