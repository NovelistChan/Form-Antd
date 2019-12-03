import React from "react";
import { InputNumber } from "antd";

export default function(props) {
  const { data, onChange } = props;
  return (
    <InputNumber
      min={0}
      max={999999}
      defaultValue={0}
      value={data}
      onChange={value => onChange(value)}
    />
  );
}
