import Button from 'components/Button'
import Input from 'components/Input'
import ProgressBar from 'containers/ProgressBar'
import { updateValueInput } from 'reducers/Home/action-creators'
import { updateStep, resetStep } from 'reducers/ProgressBar/action-creators'
import { connect } from 'react-redux'

import React, { Component } from 'react'
// question, amountElement, setStep, setValueInput, value
class Home extends Component {

  componentDidMount () {
    this.props.history.push(`/step=${this.props.currentstep}`)
  }

  render() {
    return (
      <section className="home">
        <ProgressBar />
        <h1 className="home__title">{this.props.question}</h1>
        <form className="form">
          <ul className="list-components">
            {this.props.amountElement.map((number, index) => (
              <li key={index * 2}>
                {index + 1}.<Input value={this.props.value} onChange={this.props.setValueInput} />
              </li>
            ))}
          </ul>

          <Button hasIcon="arrow-icon" className="-default" onClick={this.props.setStep}>
            Next
          </Button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ reducerHome, reducerProgressBar }) => ({
  steps: reducerHome.steps.step,
  value: reducerHome.value,
  currentstep: reducerProgressBar.currentstep,
  maxstep: reducerProgressBar.maxstep
})

const mapDispatchToProps = dispatch => ({ dispatch }) 

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  const { steps, currentstep, maxstep } = stateProps
  const { history } = ownProps
  const step = steps[currentstep - 1]
  const question = step.question
  const amountElement = Array.apply(null, { length: step.response })
    .map(Number.call, Number)
    .map(number => number)

  
  const setValueInput = e => {
    dispatch(updateValueInput(e.target.value))
  }
  const setStep = (e) => {
    e.preventDefault()
    dispatch(updateStep())
    if (currentstep === maxstep ) {
      dispatch(resetStep())
      history.push(`/step=${(currentstep - maxstep) + 1}`)
    } else {
      history.push(`/step=${currentstep + 1}`)
    }
  }

  return {
    question,
    amountElement,
    setStep,
    setValueInput,
    ...stateProps,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home)
