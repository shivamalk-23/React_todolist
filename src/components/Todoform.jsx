import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Todoform = ({addToDo}) => {
    const [value ,setvalue]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if ( e.target[0].value===''){
          alert('The input field is empty')
        }
        else{
          e.target[0].value=''
       addToDo(value)
       setvalue('')
        }
       


    } 
  return (
    <div>
      
      <form action="" className="" onSubmit={handleSubmit}>
        <TextField  

          id="outlined-size-small"
          placeholder="Lets do something"
          size="small" type="text" className="" 
          sx={{m:2,backgroundColor:'#F4F6FF',borderRadius:'5px'}}
        onChange={(e)=>{setvalue(e.target.value)
           
        } } />
        <Button sx={{mt:2}} variant="contained" type="submit" className="" >Add Task</Button>
      </form>
    </div>
  )
}

export default Todoform
