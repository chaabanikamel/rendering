
import{computeHeadingLevel} from "@testing-library/react";
import {useState} from "react"
const MyForms = () => {
  // const[nameInput,setNameInput]=useState("")
  // const[nameEmail,setEmail  Input]=useState("")
    const [formInputs,setFormInput] = useState({name:"",email:"",age:"",gender:""})
  return (
  <form  onSubmit = {(event )=>{
  event.preventDefault()
  // const bodyParam={
  //   "name":nameInput,
  //   "email":emailInput
  // }
  console.log(formInputs)
  }}>
    <label >Name:</label>
    <input value={formInput.name}
     onChange={{event}=>{
      // const newFormInput = {...formInput};
      // newFormInput.email = event.target.value
      // {setFormInput{newFormInput };
      setFormInput{{...formInput,name:event.target.value}}
    }}/>
    <hr />
    <label >Email:</label>
    <input value={formInputs.email } onChange={{ event}=>{ setFormInput{{...formInput,email:event.target.value}}}}/>
    <hr />
    <label >Age:</label>
    <input value ={formInputs.age } onChange={{ event}=>{setFormInput{{...formInput,age:event.target.value}}}}/>
    <hr />
    <label >gender:</label>
    <input value ={formInputs.gender } onChange={{ event}=>{setFormInput{{...formInput,gender:event.target.value}}}}/>
    <hr />
    <button>Submit</button>
   </form>
  )
}

export default MyForms