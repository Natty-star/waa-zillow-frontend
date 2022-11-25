import React from 'react'
import OwnerLists from '../components/Admin/OwnerLists/OwnerLists'
import Header from '../components/Header/Header'
import PageRoutes from './PageRoutes'
export default function Dashbord() {

  return (
    <div>
     <Header/>
     <PageRoutes />
    <OwnerLists />
     {/* <Property/> */}
    </div>
  )
}
