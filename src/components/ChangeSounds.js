import { useState } from "react"
import './changeSounds.css';

export default function ChangeSounds(props) {
  const [isActive, setIsActive] = useState(false);
  const activeCls = isActive ? 'is-active' : '';
  const activeTxt = isActive ? 'On' : 'Off';

  function toggle() {
    setIsActive(!isActive);
    props.changeSound();
  }

  console.log('state', isActive)
  return (
    <button className={'SlideBtn ' + activeCls} onClick={toggle}>
      <span className="SlideBtn-label visuallyhidden">{activeTxt}</span>
      <span className="SlideBtn-knob"></span>
    </button>
  )
}