import React from 'react';

// Drum pad component responsible for triggering sound. uses parent props as reference for which sounds and how loud. 
class DrumPad extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bgColor: '#808080',
      fontWeight: 'normal',
      textColor: 'black',
      height: '70px',
      boxShadow:'black 3px 3px 5px'
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.showActiveState = this.showActiveState.bind(this)
    this.hideActiveState = this.hideActiveState.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  componentDidUpdate() {
    document.getElementById(this.props.padId).volume = this.props.volume;
  }
  hideActiveState(){
    this.setState({
      bgColor: '#808080',
      fontWeight: 'normal',
      textColor: 'black',
      height: '70px',
      boxShadow:'black 3px 3px 5px'
    });
  }
  showActiveState(){
    this.setState({
      bgColor: 'red',
      fontWeight: 'bold',
      textColor: 'white',
      height: '67px',
      boxShadow:'red 0px 3px'
    });
  }
  clickHandler(){
    if(this.props.enabled){
      document.getElementById(this.props.padId).currentTime = 0;
      document.getElementById(this.props.padId).play();
      this.props.onDisplayChange(this.props.bank['pad-name']);

      this.showActiveState();
      setTimeout(this.hideActiveState, 100)
    }
  }
  handleKeyPress(e){
    if(e.key.toUpperCase() === this.props.padId){
      this.clickHandler()
    }
  }
  render(){
    return(
      <div className="drum-pad" id={this.props.bank['pad-name']} onMouseDown={this.clickHandler} style={
        {
          backgroundColor: `${this.state.bgColor}`, 
          fontWeight: `${this.state.fontWeight}`, 
          color: `${this.state.textColor}`, 
          height: `${this.state.height}`, 
          boxShadow: `${this.state.boxShadow}`
        }}>
        {this.props.padId}
        <audio className="clip" id={this.props.padId} src={this.props.bank['audio-src']}></audio>
      </div>
    )
  }
}

export default DrumPad;