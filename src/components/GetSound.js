import KeyboardSound from "./KeyboardSound";

export default function GetSound(props) {

  return props.sounds.map(sound => {
    return (
      <KeyboardSound key={sound.key} playSound={props.playSound} sound={sound} />
    )
  })
};
