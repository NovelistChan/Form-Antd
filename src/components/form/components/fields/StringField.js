import React from "react";
import widgets from "../widgets";

export default function(props) {
  const Widget = widgets.parser("input");

  return (
    <Widget
      placeholder="Please Input"
      value={props.formData}
      onChange={value => props.onChange(value)}
    />
  );
}
