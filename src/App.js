import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class DrumMachine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='drum-machine'>
        <div className="side side-one">
          <div id="logo">
            <div id="logo-inner">
              <div className="logo-text logo-text-one">BIG WEB</div>
              <div className="logo-text logo-text-two">Drum Machine</div>
              <div className="logo-text logo-text-three">1000</div>
            </div>
          </div>
          <div id="drum-pads">
            <div className="pad-row">
              <div className="drum-pad"></div>
              <div className="drum-pad"></div>
              <div className="drum-pad"></div>
            </div>
            <div className="pad-row">
              <div className="drum-pad"></div>
              <div className="drum-pad"></div>
              <div className="drum-pad"></div>
            </div>
            <div className="pad-row">
              <div className="drum-pad"></div>
              <div className="drum-pad"></div>
              <div className="drum-pad"></div>
            </div>
          </div>
        </div>
        <div className="side side-two">
          <div id="display"></div>
          <div id="controls">
            <div className="control-section" id="switches">
              <div className="switch">
                <div className="switch-title">Switch</div>
                <div className="switch-control">
                  <div className="switch-button"></div>
                </div>
              </div>
              <div className="switch">
                <div className="switch-title">Switch</div>
                <div className="switch-control">
                  <div className="switch-button"></div>
                </div>
              </div>
              <div className="switch">
                <div className="switch-title">Switch</div>
                <div className="switch-control">
                  <div className="switch-button"></div>
                </div>
              </div>
            </div>
            <div className="control-section" id="slider"></div>
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
}

export default App;
