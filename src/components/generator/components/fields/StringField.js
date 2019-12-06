import React from "react";
import attributes from "../attributes";

export default function(props) {
  const { schema, onChange } = props;

  let _attributes = attributes["string"];

  let constraints = Object.keys(_attributes).filter(
    attribute => schema[attribute]
  );

  return (
    <div>
      {constraints.map(constraint => {
        const Widget = _attributes[constraint];
        return (
          <div>
            <span>{constraint}</span>
            <Widget
              key={constraint}
              value={schema[constraint]}
              onChange={data => {
                let pre = schema;
                pre[constraint] = data;
                onChange(pre);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
