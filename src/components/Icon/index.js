const Icon = ({ name, ...props }) => (
  <svg className={`icon ${name}`} {...props}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

export default Icon
