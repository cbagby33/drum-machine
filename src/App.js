import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function DrumMachineLogo(){
  return(
    <div id="logo">
      <div id="logo-inner">
        <div className="logo-text logo-text-one">BIG WEB</div>
        <div className="logo-text logo-text-two">Drum Machine</div>
        <div className="logo-text logo-text-three">1000</div>
      </div>
    </div>
  )
}
class Slider extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="slider-tray">
        <div className="slider"></div>
      </div>
    )
  }
}
class SwitchController extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="switch">
        <div className="switch-title">Switch</div>
        <div className="switch-control">
          <div className="switch-button"></div>
        </div>
      </div>
    )
  }
}
class DrumPads extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="drum-pads">
        <div className="pad-row">
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
        <div className="pad-row">
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
        <div className="pad-row">
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
      </div>
    )
  }
}

class DrumPad extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="drum-pad"></div>
    )
  }
}

class DrumMachine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='drum-machine'>
        <div className="side side-one">
          <DrumMachineLogo />
          <DrumPads />
        </div>
        <div className="side side-two">
          <div id="display"></div>
          <div id="controls">
            <div className="control-section" id="switches">
              <SwitchController />
              <SwitchController />
              <SwitchController />
            </div>
            <div className="control-section" id="sliders">
              <Slider />
            </div>
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
