import React from 'react'
import { useEffect } from 'react'
import Header from './Components/Header/Header'
import AddToDo from './Components/toDo/AddToDo'
import Footer from './Components/Footer/Footer'
import ToDoList from './Components/toDo/ToDoList'
import Context from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function App() {
  const [todos, setTodos] = React.useState(() => {
    const saved = localStorage.getItem('todo')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='App'>
        <Header></Header>
        <main className='menu container'>
          <AddToDo onCreate={addTodo}></AddToDo>
          {todos.length ? (
            <ToDoList todos={todos} onToggle={toggleTodo}></ToDoList>
          ) : (
            <p>Список дел пуст</p>
          )}
        </main>
        <Footer></Footer>
      </div>
    </Context.Provider>
  )
}

export default App
