import { combineReducers } from 'redux'
import reducerDarkMode from './DarkMode/reducerDarkMode'
import reducerHome from './Home/reducerHome'
import reducerProgressBar from './ProgressBar/reducerProgressBar'

export default combineReducers({
  reducerDarkMode,
  reducerHome,
  reducerProgressBar
})
