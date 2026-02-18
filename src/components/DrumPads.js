import DrumPad from './DrumPad';
import jsonData from '../audioSources.json'

// object contains audio source information and trigger keys for drumpads
const audioSources = jsonData;

// component used to create rows of drum pads and pass them state from DrumMachine parent 
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

export default DrumPads;