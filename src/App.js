import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const audioSources = {
  triggerKeys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
  bankName:['Heater Kit', 'Smooth Piano Kit'],
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
class VolumeSlider extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: this.props.volume
    }
    this.inputHandler = this.inputHandler.bind(this)
  }
  inputHandler(e){
    this.props.handleVolumeChange(e.target.value)
    this.setState({
      value:e.target.value
    });
  }
  render(){
    return(
      <div className="slider-container">
        <input className="slider" type="range" max='1' min='0' step='0.01' value={this.state.value} onInput={this.inputHandler} />
      </div>
    )
  }
}
class SwitchController extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      position:this.props.position
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    if(this.state.position === 'end') {
      this.setState({
        position: 'start'
      });
    } else {
      this.setState({
        position: 'end'
      });
    }
    this.props.switchFunc();
  }
  render(){
    return(
      <div className="switch" onClick={this.clickHandler}>
        <div className="switch-title">{this.props.name}</div>
        <div className="switch-control" style={{justifyContent:`${this.state.position}`}}>
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
  componentDidUpdate() {
    document.getElementById(this.props.padId).volume = this.props.volume;
  }
  clickHandler(e){
    if(this.props.enabled){
      document.getElementById(this.props.padId).currentTime = 0;
      document.getElementById(this.props.padId).play();
      this.props.onDisplayChange(this.props.bank['pad-name'])
    }
  }
  render(){
    return(
      <div className="drum-pad" id={this.props.bank['pad-name']} onMouseDown={this.clickHandler}>
        {this.props.padId}
        <audio className="clip" id={this.props.padId} src={this.props.bank['audio-src']}></audio>
      </div>
    )
  }
}

function DrumPads({
  bank, onDisplayChange, padsEnabled, volume
}) {
  const padRowsAmount = Math.floor(audioSources.triggerKeys.length / 3);
  const rows = [];
  const pads = audioSources.triggerKeys.map(pad =>
    <DrumPad padId={pad} key={pad} bank={audioSources[pad]['bank-'+bank]} onDisplayChange={onDisplayChange} enabled={padsEnabled} volume={volume} />
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
      'bank':1,
      'display':'',
      'on': true,
      'masterVolume':0.5
    }
    this.changeDisplay = this.changeDisplay.bind(this)
    this.powerSwitch = this.powerSwitch.bind(this)
    this.changeBank = this.changeBank.bind(this)
    this.newVolume = this.newVolume.bind(this)
  }
  changeDisplay(newDisplay){
    this.setState({
      display: newDisplay
    });
  }
  powerSwitch(){
    this.setState({
      display: '',
      on: !this.state.on
    });
  }
  changeBank(){
    this.setState({
      'bank': 3 - this.state.bank,
      'display': audioSources.bankName[1-(this.state.bank-1)]
    });
  }
  newVolume(num){
    this.setState({
      masterVolume: num
    });
  }
  render(){
    return(
      <div id='drum-machine'>
        <div className="side side-one">
          <DrumMachineLogo />
          <DrumPads bank={this.state.bank} onDisplayChange={this.changeDisplay} padsEnabled={this.state.on} volume={this.state.masterVolume}/>
        </div>
        <div className="side side-two">
          <div id="display">{this.state.display}</div>
          <div id="controls">
            <div className="control-section" id="switches">
              <SwitchController name="Power" position='end' switchFunc={this.powerSwitch} />
              <SwitchController name="Bank" position='start' switchFunc={this.changeBank} />
            </div>
            <div className="control-section" id="sliders">
              <VolumeSlider volume={this.state.masterVolume} handleVolumeChange={this.newVolume} />
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
