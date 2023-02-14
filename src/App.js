import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

class Example extends React.Component {
  click() {
    console.log(getConfig());
  }

  render() {
    const config = {
      autoRotate: -2,
    };
    return (
      <div>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="./panorama.jpg"
          config={config}
        />
        <div onClick={this.click}>Click me</div>
      </div>
    );
  }
}

export default Example;