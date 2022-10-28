import soundsOne from "../utils/soundsOne"

export default function Keyboard(props) {
  return soundsOne.map(sound => {
    return (
      <button className="drum-pad" onClick={() => props.playSound(sound.key)}>
        <audio
          src={sound.url}
          id={sound.key}
          className="clip" />
        {sound.key}
      </button>
    )
  })
}