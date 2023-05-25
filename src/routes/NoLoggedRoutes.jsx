import { Route, Routes } from "react-router-dom";

import AuthPage from "../pages/Authentication/AuthPage";
import MemeGallery from "../pages/Memes/MemeGallery";

export function NoLoggedRoutes(){

  return(
      <Routes>
        <Route path="/" element={ <MemeGallery /> } />
        <Route path="/auth" element={ <AuthPage /> } />
      </Routes>
  )
}