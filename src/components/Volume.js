import './volume.css';

export default function Volume(props) {
  return (
    <div className="volume-container">
      <input 
        max="1"
        min="0"
        step="0.01"
        type="range"
        volume={props.volume}
        onChange={props.volumeChange}
      />
    </div>
  )
}