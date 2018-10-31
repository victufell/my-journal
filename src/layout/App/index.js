import { connect } from 'react-redux'
import Header from 'components/Header'

const AppLayout = ({ children, darkmode }) => {
  return (
    <div className={`app ${darkmode ? 'darkmode' : ''}`}>
      <Header />
      <main className={`container`}>{children}</main>
    </div>
  )
}

const mapStateToProps = ({ reducerDarkMode }) => ({
  darkmode: reducerDarkMode.darkmode
})

export default connect(mapStateToProps)(AppLayout)
