import './App.css';
import Keyboard from './components/Keyboard';
import soundsOne from './utils/soundsOne';
import soundsTwo from './utils/soundsTwo';

function App() {
  console.log('soundsOne', soundsOne);
  console.log('soundsTwo', soundsTwo);
  
  return (
    <div id="drum-machine">
      <Keyboard />
    </div>
  );
}

export default App;
