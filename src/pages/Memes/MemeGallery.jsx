import { useEffect, useState } from "react"

import MemeCard from "./MemeCard"

import { API } from "../../shared/services/api"
import Navbar from "../../shared/components/navbar"

const MemeGallery = () => {
    const[memes, setMemes] = useState([])

    useEffect(() => {
        API.get('/memes').then(res => {
            setMemes(res.data.list)
        })
    }, [1])

    return (
        <div>
            <Navbar />
        <div className="grid grid-cols-4">
            {
                memes.map((meme) => {
                    return <MemeCard key={meme.image_public_id} url={meme.url} description={meme.description} uploadBy={meme.uploadBy} category={meme.categories} id={meme._id} />
                })
            }
        </div>
        </div>
    );
}

export default MemeGallery