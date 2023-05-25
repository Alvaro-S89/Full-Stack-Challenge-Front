import React, { useContext, useState } from 'react'

const LogoutButton = () => {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));

    const handleClearStorage = () => {
        localStorage.clear();
        window.location.href = '/auth';
      };

  return (
     <button className='px-6' onClick={handleClearStorage}>
      {!isLogged ? 'Login' : 'Logout'}
    </button>
  )
}

export default LogoutButton