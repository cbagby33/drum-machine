import React from 'react';

// Drum pad component responsible for triggering sound. uses parent props as reference for which sounds and how loud. 
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

export default DrumPad;