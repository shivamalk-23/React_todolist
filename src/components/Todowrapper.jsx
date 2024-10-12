// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import Todoform from './Todoform'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { color } from '@mui/system';
const Todowrapper = () => {
    const [todos,settodos]=useState([])
    
   const emptypage=<div className='texts'>
   <h1 className='heading'>Its Empty</h1>


   </div>

    const addToDo= (todo)=>{
        settodos([...todos,{id:Date.now().toString(),task:todo,
            completionStatus:false,isEditing:false}])
            

    }

    const HandleDelete=(listid)=>{
    settodos(todos.filter(
       function(list){
        if (list.id!=listid)return list
       }
    ))}

    const HandleEdit=(listid)=>{

      settodos(todos.map(
        (todo)=>{
          if(todo.id===listid){
            return{...todo,isEditing:(!todo.isEditing)}
          }
          else{
            return todo
          }
        }
     ))
    }
  const HandleReEnter=(text,listid)=>{
    
    settodos(todos.map(
      (todo)=>{
        if(todo.id===listid){
          return{...todo,task:text,isEditing:false}
        }
        else{
          return todo
        }
      }
   )
  )

  }

  return (
    <Container sx={{backgroundColor:'#77CDFF',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>

      <Todoform addToDo={addToDo}/>
      <Stack>
      {((todos.length===0)  && emptypage)}
        {todos.map((list)=>{
         return <Todo list={list} key={list.id} isEditingfunc={HandleEdit} deletes={HandleDelete} reEnter={HandleReEnter}/>
        })}  
        </Stack>
    </Container>
  )
}

export default Todowrapper
