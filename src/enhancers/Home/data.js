import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import { updateValueInput } from 'reducers/Home/action-creators'
import { updateStep, resetStep } from 'reducers/ProgressBar/action-creators'
import { connect } from 'react-redux'

const handleCondition = (condition) => {
  return condition ? true : false
}

const createArrayByAmount = (amount) => {
  return Array.apply(null, { length: amount })
              .map(Number.call, Number)
              .map(number => number)
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
  
  const finalstep = handleCondition(currentstep === maxstep)
  const existPrevButton = handleCondition(currentstep > 1)

  const amountElement = createArrayByAmount(response)

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

const enhancer = compose (
  setDisplayName('src/enhancers/Home/data.js'),
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )
)

export default enhancer