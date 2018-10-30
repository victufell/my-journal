import Icon from 'components/Icon'

const DarkMode = ({ handleToggleDarkMode }) => (
  <label>
    <input type="checkbox" name="" />
    <span onClick={handleToggleDarkMode} className="check">
      <Icon name="night-icon" />
      <Icon name="evening-icon" />
    </span>
  </label>
)

export default DarkMode
