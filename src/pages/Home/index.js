import Button from 'components/Button'
import Input from 'components/Input'
import ProgressBar from 'containers/ProgressBar'
import List from 'containers/List'
import { updateStep } from 'reducers/ProgressBar/action-creators'
import { connect } from 'react-redux'

const Home = ({ question, amountElement, setStep }) => (
  <section className="home">
    <ProgressBar />
    <h1 className="home__title">{question}</h1>
    <form className="form">
      <ul className="list-components">
        {amountElement.map((number, index) => (
          <li key={index * 2}>
            {index + 1}.<Input />
          </li>
        ))}
      </ul>

      <Button hasIcon="arrow-icon" className="-default" onClick={setStep}>
        Next
      </Button>
    </form>
  </section>
)

const mapStateToProps = ({ reducerHome, reducerProgressBar }) => ({
  steps: reducerHome.steps.step,
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
    
  console.log(currentstep)
  const setStep = (e) => {
    e.preventDefault()
    dispatch(updateStep())
    
    if ((currentstep + 1) === maxstep ) {
      history.push(`/step=${(currentstep + 1) - maxstep}`)
    } 
    history.push(`/step=${currentstep + 1}`)
  }

  return {
    question,
    amountElement,
    setStep,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home)
