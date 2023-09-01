import './index.css'

const Visited = props => {
  const {data, onRemove} = props
  const {imageUrl, name, id} = data

  const onR = () => {
    onRemove(id)
  }

  return (
    <li className="VisitedList">
      <div className="imgSection">
        <img className="cImg" src={imageUrl} alt="thumbnail" />
        <div className="Cinfo">
          <p className="Cname">{name}</p>
          <button className="removeBtn" type="button" onClick={onR}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default Visited
