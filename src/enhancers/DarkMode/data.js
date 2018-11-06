import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'
import { toggleDarkMode } from 'reducers/DarkMode/action-creators'
const mapDispatchToProps = dispatch => {
  return {
    handleToggleDarkMode: e => {
      dispatch(toggleDarkMode())
    }
  }
}

const enhancer = compose (
  setDisplayName('src/enhancers/DarkMode/data'),
  connect(
    null,
    mapDispatchToProps
  )
)

export default enhancer