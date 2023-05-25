import { Route, Routes } from "react-router-dom";

import MemeGallery from "../pages/Memes/MemeGallery";
import MemeForm from "../pages/Memes/MemeForm";
import MemeDetail from "../pages/Memes/MemeDetail";
import MyMemes from "../pages/Memes/MyMemes";

export function LoggedRoutes(){

  return(
      <Routes>
        <Route path="/" element={ <MemeGallery /> } />
        <Route path="/meme/form" element={ <MemeForm />} />
        <Route path="/meme/mymemes" element={ <MyMemes />} />
        <Route path="/meme/detail" element={ <MemeDetail /> } />
      </Routes>
  )
}