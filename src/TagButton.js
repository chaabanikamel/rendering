import "./TagButtonStyle.css"
function TagButton({title,children}) {

  return (
    <div>
      {title == null || title == ""? (<div></div>):(
  <button className="tagButton">
    {title}
    {Children}
  </button>
  )}
    </div>

  )
}

export default TagButton