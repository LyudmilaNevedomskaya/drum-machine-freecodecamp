import { useEffect } from "react";

export default function KeyboardSound(props) {

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === props.sound.keyCode) {
        props.playSound(props.sound.key)
      }
    })
  }, []);

  return (
    <button className="drum-pad" id={props.sound.keyCode} onClick={() => props.playSound(props.sound.key)}>
      <audio
        src={props.sound.url}
        id={props.sound.key}
        className="clip" />
      {props.sound.key}
    </button>
  )
};