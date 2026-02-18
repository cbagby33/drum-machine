import React from 'react';

// Volume slider to determine master volume for all drum pads 
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

export default VolumeSlider;