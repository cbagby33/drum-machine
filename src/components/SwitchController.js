import React from 'react';

// Switch component for different drum machine functions, such as power and sound bank
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

export default SwitchController;