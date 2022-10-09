import React from 'react'
import logo from '../../logo.svg'

function Header() {
  return (
    <>
      <header className='header container'>
        <div className='row align-items-center'>
          {/* <div className='logo col'>
            
          </div> */}
          <ul className=' col nav nav-pills'>
            <li className='nav-item'>
              <img width='80' src={logo} className='logo' alt='logo' />
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                Главная
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Todo
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
