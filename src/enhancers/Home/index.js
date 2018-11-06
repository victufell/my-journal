import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import lifecycle from './lifecycle'
import data from './data'

export default compose (
  setDisplayName('src/enhancers/Home'),
  data,
  lifecycle,
)