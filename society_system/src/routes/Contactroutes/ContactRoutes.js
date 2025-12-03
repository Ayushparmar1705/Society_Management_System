import React from 'react'
import {Routes,Route} from "react-router-dom"
import Contacthook from '../../Hooks/Contacthook/Contacthook'
export default function ContactRoutes() {
  return (
    <Routes>
        <Route path='/Contact' element={<Contacthook></Contacthook>}></Route>
    </Routes>
  )
}
