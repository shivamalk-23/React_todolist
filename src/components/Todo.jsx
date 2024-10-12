// eslint-disable-next-line no-unused-vars
import React from 'react'
import Edittodoform from './Edittodoform'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  display:'flex',

alignContent:'center',
justifyContent:'space-between',
minWidth:'30rem',
  margin:'0.5rem',
  ...theme.typography.body2,
  padding: '1rem',

  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const Todo = ({list,deletes,isEditingfunc,reEnter}) => {

  return (

    <Item > 
    
       <p className='texts'>{list.task}</p>
       {list.isEditing && <Edittodoform list={list} reEnter={reEnter} isEditingfunc={isEditingfunc}/>}
       <Box sx={{display:'flex',alignItems:'center'}}>
       <Button   onClick={()=>deletes(list.id)}><DeleteIcon/></Button>
       {!list.isEditing && <Button sx={{justifySelf:'end'}} variant="contained" onClick={()=>isEditingfunc(list.id)} ><EditIcon/></Button> }
       </Box>
    </Item>

  )
}

export default Todo
