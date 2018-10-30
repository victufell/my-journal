const Input = ({ 
  type='text', 
  placeholder='Enter here',
  ...props
}) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    {...props} 
  />
)

export default Input