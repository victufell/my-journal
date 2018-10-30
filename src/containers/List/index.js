import List from 'components/List'

const ContainerList = ({ amount, component }) => {
  const listNumbers = Array.apply(null, {length: amount})
                          .map(Number.call, Number)
                          .map((numbers, index) => numbers)
  
  return (
    <List 
      listNumbers={listNumbers} 
      component={component} 
    />
  )
}




export default ContainerList