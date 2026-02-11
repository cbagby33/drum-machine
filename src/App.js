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
        <div id="drum-pads"></div>
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
