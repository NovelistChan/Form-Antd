import React from "react";
import fields from "./components/fields";
import Group from "./components/Group";
import utils from "./components/utils";

import "antd/dist/antd.css";

export default function(props) {
  const { extensions = {} } = props;
  fields.register(extensions.fields || {});
  utils.default.register(extensions.default || {});

  return <Group className="Form" {...props} />;
}
