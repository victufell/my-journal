import Button from 'components/Button'
import Input from 'components/Input'
import List from 'containers/List'

const Home = () => (
  <section className='home'>
    <h1 className='home__title'>
      What would today great
    </h1>
    <form className='form'>
      <List amount={3} component='Input' />
      <Button hasIcon='arrow-icon' className='-default'>
        Next
      </Button>
    </form>
    
  </section>
)

export default Home