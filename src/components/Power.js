import { useState } from "react"
import './changeSounds.css';

export default function Power(props) {
  const [isActive, setIsActive] = useState(false);
  const activeCls = isActive ? 'is-active' : '';
  const activeTxt = isActive ? 'On' : 'Off';

  function toggle() {
    setIsActive(!isActive);
    props.power()
  }

  return (
    <div className="bank">
      <label>Power {!isActive ? 'is On' : 'is Off'}</label>
      <button className={'SlideBtn ' + activeCls} onClick={toggle}>
        <span className="SlideBtn-label visuallyhidden">{activeTxt}</span>
        <span className="SlideBtn-knob"></span>
      </button>
    </div>
  )
}