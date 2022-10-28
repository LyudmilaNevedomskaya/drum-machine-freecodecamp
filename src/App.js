import './App.css';
import GetSound from './components/GetSound';

function App() {

  function playSound(el) {
    const audio = document.getElementById(el);
    //audio.currentTime = 0;
    audio.play();
  }

  return (
    <div id="drum-machine">
      <GetSound playSound={playSound}/>
    </div>
  );
}

export default App;
