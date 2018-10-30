import { connect } from 'react-redux'

const AppLayout = ({ children, darkmode }) => {
  return (
    <div>
      <div className='app'>
        <main 
          className={`${darkmode ? 'darkmode' : ''}`}>
            {children}
        </main>
      </div>
    </div>
  )
}

const mapStateToProps = ({ reducerDarkMode }) => ({
  darkmode: reducerDarkMode.darkmode
})

export default connect(mapStateToProps)(AppLayout)
