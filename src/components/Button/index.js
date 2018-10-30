import Icon from 'components/Icon'

const Button = ({ children, className = '', hasIcon, ...props }) => (
  <button {...props} className={`btn ${className}`}>
    {children}
    {hasIcon && <Icon name={hasIcon} />}
  </button>
)

export default Button
