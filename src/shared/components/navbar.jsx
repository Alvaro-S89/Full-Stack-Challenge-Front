import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './logout-button'

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  
  return (
    <>
<nav className='flex justify-between items-center'>
    {!isLogged && 
          <div className='flex ml-28 gap-10'>
          <a href="mailto:avsr_79@hotmail.com">Contact</a>
        </div>
        }

        {isLogged &&
          <div className='flex ml-28 gap-10'>
          <div><NavLink to={"/"}>Inicial page</NavLink></div>
          <div><NavLink to={"/meme/form"}>Upload your meme</NavLink></div>
          <div><NavLink to={"/meme/mymemes"}>My memes</NavLink></div>
          <a href="mailto:avsr_79@hotmail.com">Contact</a>
        </div>
        }
      <div>
        <LogoutButton />
      </div>
    </nav>
    </>
  )
}

export default Navbar