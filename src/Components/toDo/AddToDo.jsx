import React from 'react'
import { useState } from 'react'

function AddToDo({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <div className='menu container'>
      <div className='row justify-content-center'>
        <h2 className='text-center mt-20'>Список дел</h2>
        <form className='form' onSubmit={submitHandler}>
          <div className='form-block'>
            <div className='input-group'>
              <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                type='text'
                className='form-control'
                placeholder='Введите название дела'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='submit'>
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddToDo
