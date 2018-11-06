import Icon from 'components/Icon'
import enhancer from 'enhancers/DarkMode'
const DarkMode = ({ handleToggleDarkMode }) => (
  <label>
    <input type="checkbox" name="" />
    <span onClick={handleToggleDarkMode} className="check">
      <Icon name="night-icon" />
      <Icon name="evening-icon" />
    </span>
  </label>
)

export default enhancer(DarkMode)