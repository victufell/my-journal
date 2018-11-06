import lifecycle from 'recompose/lifecycle'

export default lifecycle({
  componentDidMount() {
    // history.push(`/?step=${currentstep}`)
    console.log('component did mount')
  }
})