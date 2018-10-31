import Icon from 'components/Icon'

const ProgressBar = ({ width, color, progressStep }) => (
  <div className="progress">
    <div className="progress__bar">
      <div
        className="progress__mask"
        style={{
          width: width,
          background: color
        }}
      >
        <Icon name="sun-icon" />
      </div>
      
    </div>

    <p className="steps" style={{ color: color }}>
      {progressStep}
    </p>
  </div>
)

export default ProgressBar
