import Icon from 'components/Icon'
import DarkMode from 'containers/DarkMode'

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      QuickJournal
    </div>
    <ul className='icons'>
      <li className='icons__calendar'>
        <Icon name='calendar-icon' />
      </li>
      <li className='icons__config'>
        <Icon name='config-icon' />
      </li>
      <li className='icons__darkmode'>
        <DarkMode />
      </li>
    </ul>
  </header>
)

export default Header