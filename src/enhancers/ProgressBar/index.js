import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import data from './data'
//import handlers from './handlers'

export default compose (
  setDisplayName('src/enhancers/ProgressBar/index.js'),
  data
)