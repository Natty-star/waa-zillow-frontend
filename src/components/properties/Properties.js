import React from 'react'
import './properties.css'
import SearchInput from './search/SearchInput'
export default function Properties() {
  return (
    <div className='cover'>
        <div className='center-content center container'>
            <div >
              <form className=''>
                   <SearchInput/>
              </form>
            </div>
        </div> 
    </div>
  )
}
