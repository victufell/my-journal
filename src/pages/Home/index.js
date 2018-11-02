import { Component } from 'react'
import Button from 'components/Button'
import Input from 'components/Input'
import ProgressBar from 'containers/ProgressBar'
import {
  updateValueInput,
  validationInput
} from 'reducers/Home/action-creators'
import { updateStep, resetStep } from 'reducers/ProgressBar/action-creators'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount() {
    const { history, currentstep } = this.props
    history.push(`/?step=${currentstep}`)
  }

  render() {
    const {
      answers,
      setStep,
      question,
      finalstep,
      reduceStep,
      amountElement,
      setValueInput,
      existPrevButton
    } = this.props
    return (
      <section className="home">
        <ProgressBar />
        <h1 className="home__title">{question}</h1>
        <form className="form">
          <ul className="list-components">
            {amountElement.map((number, index) => (
              <li key={index * 2}>
                {index + 1}.
                <Input
                  name={`response-${index + 1}`}
                  value={answers[index] || ''}
                  onChange={setValueInput}
                />
              </li>
            ))}
          </ul>
          <div
            className={`wrapper-btn ${!existPrevButton ? '-rigth-btn' : ''}`}
          >
            {existPrevButton && (
              <Button className={`prev -default`} onClick={reduceStep}>
                Previous
              </Button>
            )}
            <Button
              hasIcon={'arrow-icon'}
              className={`next -default ${finalstep ? '-shake' : ''}`}
              onClick={setStep}
            >
              Next
            </Button>
          </div>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ reducerHome, reducerProgressBar }) => ({
  steps: reducerHome.steps.step,
  isValid: reducerHome.isValid,
  currentstep: reducerProgressBar.currentstep,
  maxstep: reducerProgressBar.maxstep
})

const mapDispatchToProps = dispatch => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  const { steps, currentstep, maxstep } = stateProps

  const step = steps[currentstep - 1]
  const { answers, question, response } = step
  const { history } = ownProps

  const finalstep = currentstep === maxstep ? true : false
  const existPrevButton = currentstep > 1 ? true : false

  const amountElement = Array.apply(null, { length: response })
    .map(Number.call, Number)
    .map(number => number)

  const setValueInput = e => {
    const position = e.target.name.replace('response-', '')
    dispatch(updateValueInput(e.target.value, position, currentstep))
  }

  const setStep = e => {
    e.preventDefault()
    dispatch(updateStep(1))

    if (finalstep) {
      dispatch(resetStep())
      history.push(`/?step=${currentstep - maxstep + 1}`)
    } else {
      history.push(`/?step=${currentstep + 1}`)
    }
  }

  const reduceStep = e => {
    e.preventDefault()
    if (currentstep > 1) {
      dispatch(updateStep(-1))
      history.push(`/?step=${currentstep - 1}`)
    }
  }

  return {
    answers,
    setStep,
    question,
    finalstep,
    reduceStep,
    amountElement,
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
