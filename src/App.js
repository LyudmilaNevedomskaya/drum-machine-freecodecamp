import './App.css';
import ChangeSounds from './components/ChangeSounds';
import GetSound from './components/GetSound';

function App() {

  function playSound(el) {
    const audio = document.getElementById(el);
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div id="drum-machine" className="container">
      <div className="drum-pad-container">
      <GetSound playSound={playSound}/>
      </div>
      <div className="control-container">
        <ChangeSounds />
      </div>
    </div>
  );
}

export default App;
