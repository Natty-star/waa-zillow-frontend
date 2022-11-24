import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Properties from '../components/properties/Properties'
import Property from '../components/properties/property/Property'
 

export default function PageRoutes() {
  return (
   <Routes>
        <Route path='/' element={<Properties/>}/>
        <Route path='/login' element={<Property/>} />
        <Route path='/properties' element={<Properties/>}/> 
        <Route/>

   </Routes>
  )
}
