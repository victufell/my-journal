import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { connect } from 'react-redux'

const mapStateToProps = ({ reducerProgressBar }) => ({
  currentstep: reducerProgressBar.currentstep,
  maxstep: reducerProgressBar.maxstep
})

const mergeProps = (stateProps) => {
  const { currentstep, maxstep } = stateProps
  const colorstep = ['#FC9F65', '#34C983', '#5A99FC']
  const width = `${(100 / maxstep) * currentstep}%`
  const color = `${colorstep[currentstep - 1]}`
  const progressStep = `${currentstep}/${maxstep}`
  return {
    width,
    color,
    progressStep
  }
}

const enhancer = compose(
  setDisplayName('src/enhancers/ProgressBar/data.js'),
  connect(
    mapStateToProps,
    null,
    mergeProps
  )
)

export default enhancer