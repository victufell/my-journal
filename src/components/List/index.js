import Input from 'components/Input'

const List = ({ listNumbers, component }) => (
  <ul className="list-components">
    {listNumbers.map((number, index) => (
      <li key={index * 2}>
        {index + 1}.<Input className="-light" />
      </li>
    ))}
  </ul>
)

export default List
