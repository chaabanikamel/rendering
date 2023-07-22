import {useState} from "react";
const MyInput = () => {
  const [myInputValue,setMyInputValue] = useState("");
   
  function handleInputChange(event){
        setInputValue(event.target.value)
    // alert("welcome")
  }
  return (
    <div>
       <label  >Your Name:</label>
       <input value ={myInputValue} onChange={handleInputChange}/>
    </div>
  )
}

export default MyInput