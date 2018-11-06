import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import setDisplayName from 'recompose/setDisplayName'

export default compose (
  setDisplayName('src/enhancers/ProgressBar/handlers.js'),
  withHandlers({
    formatData: ({ currentstep, maxstep }) => () => {
      
    }
  })
)