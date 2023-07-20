import TagButton from "./TagButton";
function post({postName = "no Title",postBody = "No Body"}){
  return(
    <div style={{pading:"10px",border:"solid #1d9bf0 5px",margin:"25px"}}>
         <h2>{postName}</h2>
         <hr />
         <p>{postBody}</p>
         <TagButton/>
    </div>
  )
}