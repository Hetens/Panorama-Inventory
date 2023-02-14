import React from 'react';
import ReactDOM from 'react-dom';
import { Pannellum } from 'react-pannellum';

function App() {
  return (
    <div>
      <Pannellum
        width="100%"
        height="500px"
        image=",/panorama.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));