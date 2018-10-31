import Loadable from 'react-loadable'
import AppLayout from 'layout/App'
import Home from 'pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  browserHistory
} from 'react-router-dom'

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <AppLayout>
        <Route path={`/`} component={Home} />
      </AppLayout>
    </Switch>
  </Router>
)

export default App
