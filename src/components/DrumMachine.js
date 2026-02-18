import React from 'react';

import jsonData from '../audioSources.json';

import DrumMachineLogo from './DrumMachineLogo';
import VolumeSlider from './VolumeSlider';
import SwitchController from './SwitchController';
import DrumPads from './DrumPads';

// object contains audio source information and trigger keys for drumpads
const audioSources = jsonData;

// Component is parent for all drum machine components. Manages master properties as state and passes them as props 
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
    this.displayReset = this.displayReset.bind(this)
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
  displayReset(){
    this.setState({
      'display': ''
    });
  }
  newVolume(num){
    this.setState({
      'masterVolume': num,
      'display': 'Volume: '+Math.floor(num*100)
    });
    setTimeout(this.displayReset, 3000)
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

export default DrumMachine;