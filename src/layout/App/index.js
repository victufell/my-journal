const AppLayout = ({ children }) => {
  return (
    <div>
      <div className="app">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default AppLayout
