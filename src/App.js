import { useState } from "react";
import './App.css';
import ChangeSounds from './components/ChangeSounds';
import GetSound from './components/GetSound';

import soundsOne from "./utils/soundsOne";
import soundsTwo from "./utils/soundsTwo"

function App() {
  
  const soundsGroup = {
    heaterKit: soundsOne,
    smoothPianoKit: soundsTwo
  }
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);


  function playSound(el) {
    const audio = document.getElementById(el);
    audio.currentTime = 0;
    audio.play();
  }

  function changeSound(s) {
    if(soundType === "heaterKit") {
      setSoundType("smoothPianoKit")
      setSounds(soundsGroup.smoothPianoKit)
    } else {
      setSoundType("heaterKit")
      setSounds(soundsGroup.heaterKit)
    }
  }

  return (
    <div id="drum-machine" className="container">
      <div className="drum-pad-container">
      <GetSound playSound={playSound} sounds={sounds}/>
      </div>
      <div className="control-container">
        <ChangeSounds changeSound={changeSound}/>
      </div>
    </div>
  );
}

export default App;
