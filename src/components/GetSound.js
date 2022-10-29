import soundsOne from "../utils/soundsOne";
import KeyboardSound from "./KeyboardSound";

export default function GetSound(props) {
  return soundsOne.map(sound => {
    return (
        <KeyboardSound key={sound.key} playSound={props.playSound} sound={sound} />
    )
  })
};
