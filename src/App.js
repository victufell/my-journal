import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import AppLayout from 'layout/App'
import Home from 'pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  browserHistory
} from 'react-router-dom'

const App = ({ currentstep }) => (
  <Router history={browserHistory}>
    <Switch>
      <AppLayout>
        <Route path={`/`} component={Home} />
      </AppLayout>
    </Switch>
  </Router>
)

const mapStateToProps = ({ reducerProgressBar }) => ({
  currentstep: reducerProgressBar.currentstep
})

export default connect(mapStateToProps)(App)
