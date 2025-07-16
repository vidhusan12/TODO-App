import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import React from "react"
import './Todo.css'

export default function Todo(props) {


  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy deadline"/>
      </ListItem>
    </List>
  )
}