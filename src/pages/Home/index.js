import React, { Component } from 'react'
import Button from 'components/Button'
import Input from 'components/Input'
import ProgressBar from 'containers/ProgressBar'
import { updateValueInput } from 'reducers/Home/action-creators'
import { updateStep, resetStep } from 'reducers/ProgressBar/action-creators'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount() {
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
                {index + 1}.
                <Input
                  name={`response-${index + 1}`}
                  onChange={this.props.setValueInput}
                />
              </li>
            ))}
          </ul>
          <div
            className={`wrapper-btn ${
              !this.props.existPrevButton ? '-rigth-btn' : ''
            }`}
          >
            {this.props.existPrevButton && (
              <Button
                className={`prev -default`}
                onClick={this.props.reduceStep}
              >
                Previous
              </Button>
            )}
            <Button
              hasIcon={`${!this.props.finalstep ? 'arrow-icon' : ''}`}
              className={`next -default ${
                this.props.finalstep ? '-shake' : ''
              }`}
              onClick={this.props.setStep}
            >
              {!this.props.finalstep ? 'Next' : 'Congratulations'}
            </Button>
          </div>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ reducerHome, reducerProgressBar }) => ({
  steps: reducerHome.steps.step,
  currentstep: reducerProgressBar.currentstep,
  maxstep: reducerProgressBar.maxstep
})

const mapDispatchToProps = dispatch => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  const { steps, currentstep, maxstep } = stateProps
  const { history } = ownProps
  const finalstep = currentstep === maxstep ? true : false
  const step = steps[currentstep - 1]
  const question = step.question
  const existPrevButton = currentstep > 1 ? true : false
  const amountElement = Array.apply(null, { length: step.response })
    .map(Number.call, Number)
    .map(number => number)

  const setValueInput = e => {
    dispatch(updateValueInput(e.target.value))
  }
  const setStep = e => {
    e.preventDefault()
    dispatch(updateStep(1))
    if (finalstep) {
      dispatch(resetStep())
      history.push(`/step=${currentstep - maxstep + 1}`)
    } else {
      history.push(`/step=${currentstep + 1}`)
    }
  }

  const reduceStep = e => {
    e.preventDefault()
    if (currentstep > 1) {
      dispatch(updateStep(-1))
      history.push(`/step=${currentstep - 1}`)
    }
  }

  return {
    question,
    finalstep,
    amountElement,
    setStep,
    reduceStep,
    setValueInput,
    existPrevButton,
    ...stateProps,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home)
