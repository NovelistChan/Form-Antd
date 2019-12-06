import React from "react";
import utils from "../utils";
import Package from "../Package";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function(props) {
  const { schema, global, onChange } = props;

  return (
    <div className="field object">
      <Collapse>
        {Object.keys(schema.properties || {}).map(name => {
          const subSchema = schema.properties[name];
          return (
            <Panel>
              <Package
                key={name}
                schema={subSchema}
                global={global}
                onChange={updated => {
                  let pre = schema;
                  pre.properties[name] = updated;
                  onChange(pre);
                }}
              />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
}
