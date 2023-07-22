  import { useState } from "react"
let name ="marwa"
const MyButton = () => {
 const [name,setName]=useState("marwa")
   console.log(value)
   function buttonClicked(){
    if(name == "marwa"){
      setValue("Ferdouse")
    }else{
      setName("marwa")
    }
  
  }
  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </div>
  )
}

export default MyButton