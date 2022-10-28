import soundsOne from "../utils/soundsOne"

export default function Keyboard() {
  return soundsOne.map(sound => {
    return (
      <button className="drum-pad">
        <audio
          src={sound.url}
          id={sound.key}
          className="clip" />
        {sound.key}
      </button>
    )
  })
}