import { connect } from 'react-redux'
import ProgressBar from 'components/ProgressBar'

const colorstep = ['#FC9F65', '#34C983', '#5A99FC']

const ContainerProgressBar = ({ currentstep, maxstep }) => {
  const width = `${(100 / maxstep) * currentstep}%`
  const color = `${colorstep[currentstep - 1]}`
  const progressStep = `${currentstep}/${maxstep}`
  return <ProgressBar width={width} color={color} progressStep={progressStep} />
}

const mapStateToProps = ({ reducerProgressBar }) => ({
  currentstep: reducerProgressBar.currentstep,
  maxstep: reducerProgressBar.maxstep
})

export default connect(mapStateToProps)(ContainerProgressBar)
