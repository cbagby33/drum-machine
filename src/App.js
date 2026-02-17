import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const audioSources = {
  'trigger-keys':['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
  'Bank_1':{
    'Heater 1': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    'Heater 2': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    'Heater 3': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    'Heater 4': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    'Clap': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    'Open Hi-Hat': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    'Kick & Hat': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    'Kick': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    'Closed Hi-Hat': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
  },
  'Bank_2':{
    'Chord 1': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    'Chord 2': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    'Chord 3': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    'Shaker': 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    'Open HH': 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    'Closed HH': 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    'Punchy Kick': 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    'Rimshot': 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    'Snare': 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
}

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
          <DrumPad padId="Q"/>
          <DrumPad padId="W"/>
          <DrumPad padId="E"/>
        </div>
        <div className="pad-row">
          <DrumPad padId="A"/>
          <DrumPad padId="S"/>
          <DrumPad padId="D"/>
        </div>
        <div className="pad-row">
          <DrumPad padId="Z"/>
          <DrumPad padId="X"/>
          <DrumPad padId="C"/>
        </div>
      </div>
    )
  }
}
class DrumPad extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      padColor: '#808080'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(e){
    document.getElementById(this.props.padId).currentTime = 0;
    document.getElementById(this.props.padId).play();
  }
  render(){
    return(
      <div className="drum-pad" onMouseUp={this.clickHandler}>
        {this.props.padId}
        <audio className="clip" id={this.props.padId} src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>
      </div>
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
