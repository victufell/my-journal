import lifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'

export default lifecycle({
  withState,
  componentDidMount() {
    const { history, currentstep } = this.props 
    history.push(`/?step=${currentstep}`)
  }
})