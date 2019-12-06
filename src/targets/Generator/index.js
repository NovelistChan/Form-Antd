import React from "react";
import Generator from "../../components/generator";
import AceEditor from "react-ace";
import "./index.css";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

class Target extends React.Component {
  render() {
    const { schema, text } = this.state;

    return (
      <div className="generator-container">
        <div className="generator-editor">
          <AceEditor
            mode="json"
            theme="github"
            name="UNIQUE_ID_OF_DIV"
            width="100%"
            height="100%"
            value={text}
            onChange={this.editorChangeHandler}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="generator-template">
          <Generator
            schema={schema}
            onChange={updated =>
              this.setState({ schema: updated, text: JSON.stringify(updated) })
            }
          />
        </div>
      </div>
    );
  }

  state = {
    schema: {},
    text: JSON.stringify({
      type: "object",
      properties: {
        a: { type: "string", maxLength: 1 }
      }
    })
  };

  componentDidMount() {
    try {
      const schema = JSON.parse(this.state.text);
      this.setState({ schema });
      console.log(schema);
    } catch (error) {}
  }

  editorChangeHandler = text => {
    try {
      this.setState({ text });
      const schema = JSON.parse(text);
      this.setState({ schema });
      console.log(schema);
    } catch (error) {}
  };
}

export default Target;
