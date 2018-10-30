import Icon from 'components/Icon'

const ProgressBar = ({ currentstep, maxstep, colorstep }) => (
  <div className="progress">
    <div className="progress__bar">
      <div
        className="progress__mask"
        style={{
          width: `${(100 / maxstep) * currentstep}%`,
          background: `${colorstep[currentstep - 1]}`
        }}
      />
      <Icon
        name="sun-icon"
        style={{
          transform: `translateX(${(500 / maxstep) * currentstep - 50}%)`
        }}
      />
    </div>

    <p className="steps" style={{ color: `${colorstep[currentstep - 1]}` }}>
      {`${currentstep}/${maxstep}`}
    </p>
  </div>
)

export default ProgressBar
