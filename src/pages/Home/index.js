import Button from 'components/Button'
import Input from 'components/Input'
import ProgressBar from 'components/ProgressBar'
import enhancer from 'enhancers/Home'

const Home = ({
  answers,
  setStep,
  question,
  finalstep,
  reduceStep,
  amountElement,
  setValueInput,
  existPrevButton
}) => (
  <section className="home">
    <ProgressBar />
    <h1 className="home__title">{question}</h1>
    <form className="form">
      <ul className="list-components">
        {amountElement.map((number, index) => (
          <li key={index * 2}>
            {index + 1}.
            <Input
              aria-label="response"
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

export default enhancer(Home)