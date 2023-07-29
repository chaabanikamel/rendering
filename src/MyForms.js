import {useState} from "react"
const MyForms = () => {
  // const[nameInput,setNameInput]=useState("")
  // const[nameEmail,setEmail  Input]=useState("")
    const [formInputs,setFormInput] = useState({name:"",email:"",age:"",gender:"",generalInfo:"",
  isStudent:"",country:"",status:"", 
});
 function handleCheckBoxChanged(event){

 }
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
    <div>
    <input  value="student" type="radio" name="status" checked ={formInputs.status == "student"} onChange={{ event}=>{setFormInput{{...formInput,status:event.target.value}}}} />
    Student
    <input value="student" type="radio" checked ={formInputs.status == "teacher"} onChange={{ event}=>{setFormInput{{...formInput,status:event.target.value}}}}/>
    Teacher
    </div>

    <hr />
    <select  value ={formInputs.country } onChange={{ event}=>{setFormInput{{...formInput,country:event.target.value}}}}>
      <option >Filand</option>
      <option >Canda</option>
      <option >Azerbaijan</option>
    </select>
    <hr />
    <label> General Info</label>
    <hr />
    <label>Are you student</label>
    <input type="checkbox" chked={formInputs.isStudent} onChange={handleCHeckboxchanged} />
    <hr />
      <textarea
    value={formInputs.generalInfo} 
    onChange={{event}=>{
        setFormInput{{...formInput,generalInfo:event.target.value}}
    }}/>
    
      
    <button>Submit</button>
   </form>
  )
}

export default MyForms