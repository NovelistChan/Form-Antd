import React from "react";
import utils from "../utils";
import widgets from "../widgets";

export default function(props) {
  const Widget = widgets.parser("inputNumber");
  return (
    <Widget
      placeholder="Please Input"
      value={
        props.formData || props.schema.default || utils.default.parser("number")
      }
      onChange={value => props.onChange(value)}
    />
  );
}
