/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Edittodoform = ({list,isEditingfunc,reEnter}) => {
  function execute(){
    
  }
  const [retext,setretext]=useState('')
  return (
    <Box sx={{display:'flex',alignItems:'center'}}>
      <form onSubmit={()=>{}}>
      <TextField  

id="outlined-size-small"
placeholder="Lets do something"
size="small" type="text" className="" 
sx={{mr:'1rem',backgroundColor:'#F4F6FF',borderRadius:'5px'}} onChange={(e)=>setretext(e.target.value)} />
      <Button variant="contained" type='submit' onClick={
        (e)=>{
          
          e.preventDefault()
          if ( retext===''){
            alert('The input field is empty')
            return
          }
          else{
            reEnter(retext,list.id)
          }
          
     
      }} >Finish</Button>
      </form>
    </Box>
  )
}

export default Edittodoform
