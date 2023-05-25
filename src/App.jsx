import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NoLoggedRoutes } from './routes/NoLoggedRoutes';
import { LoggedRoutes } from './routes/LoggedRoutes';

import { IsLoggedContext } from './shared/contexts/IsLoggedContext';

function App() {

  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));

  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}> 
      <BrowserRouter>
        
        {!isLogged && 
          <NoLoggedRoutes />
        }

        {isLogged &&
          <LoggedRoutes />
        }

      </BrowserRouter>
    </IsLoggedContext.Provider>
  );
}

export default App
