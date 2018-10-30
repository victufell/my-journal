import Loadable from 'react-loadable'
import AppLayout from 'layout/App'
import Header from 'components/Header'
import Home from 'pages/Home'

const App = () => (
  <AppLayout>   
    <Header />
    <div className='container'>
      <Home />
    </div>
  </AppLayout>
)

export default App
