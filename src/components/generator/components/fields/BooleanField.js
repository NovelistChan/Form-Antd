import React from "react";
import utils from "../utils";
import { Checkbox } from "antd";

export default function(props) {
  return (
    <Checkbox
      checked={
        props.formData ||
        props.schema.default ||
        utils.default.parser("boolean")
      }
      onChange={e => props.onChange(e.target.checked)}
    />
  );
}
