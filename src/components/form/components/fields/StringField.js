import React from 'react'
import { Input, Select } from 'antd'
import widgets from '../widgets'
// export default function (props) {
//   return <input className="field string" type="text" value={props.formData} onChange={e => props.onChange(e.target.value)} />
// }

export default function (props) {

  const { schema, formData } = props
  // console.log(schema.enum)
  if (schema.enum) {
    // console.log("enum")
    return (
      <div>
        <Select placehodler={"please select"} style={{ width: 100 }} value={formData} onChange={(e) => props.onChange(e)}>
          {schema.enum.map(item => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </div>
    )
  }

  const Widget = widgets.parser("input")

  // console.log("return")
  // console.log(Widget)
  //return <div></div>
  return (
    <div>
      
      <Widget placeholder="Please Input" value={props.formData}
        onChange={value => props.onChange(value)} />
    </div>
  )
}