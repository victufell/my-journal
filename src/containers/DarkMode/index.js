import DarkMode from 'components/DarkMode'
import { connect } from 'react-redux'
import { toggleDarkMode } from 'reducers/DarkMode/action-creators'

const ContainerDarkMode = (props) => (
  <DarkMode {...props} />
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleDarkMode: (e) => {
      dispatch(toggleDarkMode())
    }
  }
}

export default connect(null, mapDispatchToProps)(ContainerDarkMode)