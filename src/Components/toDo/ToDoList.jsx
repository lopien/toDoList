import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <ToDoItem
            todo={todo}
            index={index}
            key={todo.id}
            onChange={props.onToggle}
          />
        )
      })}
    </ul>
  )
}

export default ToDoList
