import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const audioSources = {
  triggerKeys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
  Q: {
    'bank-1':{
      'pad-name': 'Heater 1',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'
      },
    'bank-2':{
      'pad-name': 'Chord 1',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }
  },
  W: {
    'bank-1':{
      'pad-name': 'Heater 2',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'
    },
    'bank-2':{
      'pad-name': 'Chord 2',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }
  },
  E: {
    'bank-1':{
      'pad-name': 'Heater 3',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'
    },
    'bank-2':{
      'pad-name': 'Chord 3',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }
  },
  A: {
    'bank-1':{
      'pad-name': 'Heater 4',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'
    },
    'bank-2':{
      'pad-name': 'Shaker',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }
  },
  S: {
    'bank-1':{
      'pad-name': 'Clap',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'
    },
    'bank-2':{
      'pad-name': 'Open HH',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }
  },
  D: {
    'bank-1':{
      'pad-name': 'Open Hi-Hat',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'
    },
    'bank-2':{
      'pad-name': 'Closed HH',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }
  },
  Z: {
    'bank-1':{
      'pad-name': 'Kick & Hat',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
    },
    'bank-2':{
      'pad-name': 'Punchy Kick',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }
  },
  X: {
    'bank-1':{
      'pad-name': 'Kick',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'
    },
    'bank-2':{
      'pad-name': 'Rimshot',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }
  },
  C: {
    'bank-1':{
      'pad-name': 'Closed Hi-Hat',
      'audio-src': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
    },
    'bank-2':{
      'pad-name': 'Snare',
      'audio-src': 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
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

class DrumPad extends React.Component{
  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(e){
    document.getElementById(this.props.padId).currentTime = 0;
    document.getElementById(this.props.padId).play();
  }
  render(){
    return(
      <div className="drum-pad" id={this.props.bank['pad-name']} onMouseUp={this.clickHandler}>
        {this.props.padId}
        <audio className="clip" id={this.props.padId} src={this.props.bank['audio-src']}></audio>
      </div>
    )
  }
}

function DrumPads({
  bank
}) {
  const padRowsAmount = Math.floor(audioSources.triggerKeys.length / 3);
  const rows = [];
  const pads = audioSources.triggerKeys.map(pad =>
    <DrumPad padId={pad} key={pad} bank={audioSources[pad]['bank-'+bank]}/>
  );
  for(let row = 0; row < padRowsAmount; row++){
    let padStart = row*3;
    let padEnd = padStart+3;
    rows.push(<div className="pad-row" key={row}>{pads.slice(padStart, padEnd)}</div>)
  }
  return(
    <div id="drum-pads">{rows}</div>
  )
}

class DrumMachine extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      'bank':1
    }
  }
  render(){
    return(
      <div id='drum-machine'>
        <div className="side side-one">
          <DrumMachineLogo />
          <DrumPads bank={this.state.bank}/>
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
