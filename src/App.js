import { useState } from "react";
import './App.css';
import ChangeSounds from './components/ChangeSounds';
import Display from "./components/Display";
import GetSound from './components/GetSound';
import Power from "./components/Power";
import Volume from "./components/Volume";

import soundsOne from "./utils/soundsOne";
import soundsTwo from "./utils/soundsTwo"

function App() {

  const soundsGroup = {
    heaterKit: soundsOne,
    smoothPianoKit: soundsTwo
  }

  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const [displaySoundName, setDisplaySoundName] = useState(soundType);
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(1)

  function playSound(el) {
    if (power) {
      const audio = document.getElementById(el);
      audio.currentTime = 0;
      audio.play();
      const nameToDisplay = soundsGroup[soundType].filter(e => {
        if (e.key === audio.id) {
          return e.id
        }
      });
      setDisplaySoundName(nameToDisplay[0].id);
    } if (!power) {
      setDisplaySoundName("Turn On The Power")

    }
  }

  function changeSound() {
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit")
      setSounds(soundsGroup.smoothPianoKit)
      setDisplaySoundName("smoothPianoKit")
    } else {
      setSoundType("heaterKit")
      setSounds(soundsGroup.heaterKit)
      setDisplaySoundName("heaterKit")
    }
  }

  function changePower() {
    setPower(!power);
  }

  function volumeChange(e) {
    setVolume(e.target.value);
    const displayVolume = Math.round(e.target.value * 100);
    //console.log(displayVolume);
    setDisplaySoundName('Volume: ' + displayVolume)
  }

  function controlVolume() {
    const medias = sounds.map(sound => document.getElementById(sound.key));
    medias.forEach(media => {
      if (media) {
        media.volume = volume;
      }
    })
  }

  return (
    <div className="wrapper">
      <h1>Drum Machine</h1>
      <div id="drum-machine" className="container">
        {controlVolume()}
        <div className="drum-pad-container">
          <GetSound playSound={playSound} sounds={sounds} />
        </div>
        <div className="control-container">
          <Power power={changePower} />
          <Display displayName={displaySoundName} />
          <Volume volume={volume} volumeChange={volumeChange} />
          <ChangeSounds changeSound={changeSound} />
        </div>
      </div>
      <p>made by Mila</p>
    </div>
  );
}

export default App;
