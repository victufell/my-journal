import { connect } from 'react-redux'
import ProgressBar from 'components/ProgressBar'

const colorstep = ['#FC9F65', '#34C983', '#5A99FC']

const ContainerProgressBar = props => (
  <ProgressBar {...props} colorstep={colorstep} />
)

const mapStateToProps = ({ reducerProgressBar }) => ({
  currentstep: reducerProgressBar.currentstep,
  maxstep: reducerProgressBar.maxstep
})

export default connect(mapStateToProps)(ContainerProgressBar)
