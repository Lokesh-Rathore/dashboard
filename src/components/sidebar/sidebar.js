import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        {/* <img src='' alt=''/> */}
        <h1>Logo</h1>
      </div>
      <div className='menu'>
      
        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 1</p>
        </div>

        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 2</p>
        </div>

        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 3</p>
        </div>

        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 4</p>
        </div>

        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 5</p>
        </div>

        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 6</p>
        </div>

        <div className='menuItems active'>
          <span class="material-symbols-outlined">home</span>
          <p>Page 7</p>
        </div>
      </div>
      <div className='logout'>
          <span class="material-symbols-outlined">logout</span>
          <p>Sign Out</p>
        </div>
    </div>
  )
}

export default Sidebar
