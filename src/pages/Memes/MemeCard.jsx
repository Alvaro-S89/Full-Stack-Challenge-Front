import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { API } from "../../shared/services/api"

const MemeCard = (props) => {
  const [changeDesc, setChangeDesc] = useState(true)
  const [description, setDescription] = useState(props.description)

  const location = useLocation();

  const currentPath = location.pathname;
  const showContent = currentPath === '/meme/mymemes';

  const handleRemove = (id) => {
    API.delete(`/memes/${id}`).then(res => {
    window.location.reload();
  })
  }

  const handleEditMode = () => {
    setChangeDesc(prevMode => !prevMode)
  }

  const editDescriptionHandler = (event, id) => {
    if(event.key === 'Enter') {
      API.put(`/memes/${id}`, {
        description: event.target.value
      }).then(res => {
        setDescription(event.target.value)
        handleEditMode()
      }).catch(e => {
        console.log(e)
      }) 
    }
  }

  // setIsLoginMode(prevMode => !prevMode)   para cambiar un boleano
  // window.location.href = '/auth';    para forzar ir a una ruta
  // window.location.reload(); para forzar refresco

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
        <img className="w-full" src={props.url} />
        <div className="px-6 py-4">
          {
            changeDesc ? (
          <p className="text-gray-700 text-base">
            {description}
          </p>
            ) : (
              <input 
                className='border border-black'
                type="text"
                placeholder='Insert new description'
                onKeyDown={() => editDescriptionHandler(event, props.id)}
              />
            )
          }
          <p className="text-gray-700 text-base">
            {props.uploadBy}
          </p>
        </div>
        <div className='flex justify-center gap-5'>
        {showContent && <AiFillEdit size={35}  onClick={handleEditMode} className='cursor-pointer'/>}
        {showContent && <AiFillDelete size={35} onClick={() => handleRemove(props.id)} className='cursor-pointer' />}
        </div>
    </div>
  )
}

export default MemeCard