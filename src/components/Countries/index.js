import './index.css'

const Countries = props => {
  const {data, onVisit} = props
  const {isVisited, name, id} = data

  const onV = () => {
    onVisit(id)
  }
  return (
    <li className="listItems">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" onClick={onV} className="VisitBtn">
          Visit
        </button>
      )}
    </li>
  )
}
export default Countries
