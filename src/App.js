import './App.css';
import Keyboard from './components/Keyboard';
import soundsOne from './utils/soundsOne';
import soundsTwo from './utils/soundsTwo';

function App() {

  function playSound(el) {
    const audio = document.getElementById(el);
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div id="drum-machine">
      <Keyboard playSound={playSound}/>
    </div>
  );
}

export default App;
