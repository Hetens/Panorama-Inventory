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
          imageSource="https://cdn.outsource2india.com/featured-images/outsource-360-degree-panorama-photo-stitching-services.jpg"
          config={config}
        />
        <div onClick={this.click}>Click me</div>
      </div>
    );
  }
}

export default Example;