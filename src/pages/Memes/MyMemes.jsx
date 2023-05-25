import React, { useEffect, useState } from 'react'
import { API } from "../../shared/services/api"
import Navbar from '../../shared/components/navbar'
import MemeCard from './MemeCard'

const MyMemes = () => {
    const[myMemes, setMyMemes] = useState([])
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        API.get('/memes').then(res => {
            setMyMemes(res.data.list)
            console.log(myMemes)
        })
    }, [1])


    const ownMemes = myMemes.filter((myMeme) => {
      console.log(myMeme)
      return myMeme.uploadBy === userId
    }) 
    
  return (
    <div>
            <Navbar />
        <div className="grid grid-cols-4">
            {
                ownMemes.map((myMeme) => {
                    return <MemeCard key={myMeme.image_public_id} url={myMeme.url} description={myMeme.description} uploadBy={myMeme.uploadBy} category={myMeme.categories} id={myMeme._id} />
                })
            }
        </div>
        </div>
  )
}

export default MyMemes








