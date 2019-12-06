import React from "react";
import { Input } from "antd";

export default {
  maxLength: ({ value, onChange }) => (
    <Input value={value} onChange={e => onChange(e.target.value)} />
  ),
  minLength: ({ value, onChange }) => (
    <Input value={value} onChange={e => onChange(e.target.value)} />
  )
};
