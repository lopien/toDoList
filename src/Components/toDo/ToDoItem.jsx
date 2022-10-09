import React, { useContext } from 'react'
import Context from '../../context'

function ToDoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.complited) {
    classes.push('done')
  }

  return (
    <li className='todo'>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          className='todo-input'
          onChange={() => {
            onChange(todo.id)
          }}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>

      <button
        className='btn-clear'
        onClick={() => {
          removeTodo(todo.id)
        }}
      >
        &times;
      </button>
    </li>
  )
}

export default ToDoItem
