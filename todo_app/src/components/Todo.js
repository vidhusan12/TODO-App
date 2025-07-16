import { Box, Button, Input, List, ListItem, ListItemAvatar, ListItemText, Modal } from "@mui/material"
import React, { useState } from "react"
import './Todo.css'
import db from "../firebase"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Todo(props) {

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    //update tge todo with the new input 
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true })
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <Box sx={{ ...style, width: 200 }}>
          <h1>Edit..</h1>
          <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
        </Box>

      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
      </List>
    </>
  )
}