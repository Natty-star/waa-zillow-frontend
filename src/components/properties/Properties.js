import React from 'react'
import './properties.css'
import Property from './property/Property';
import SearchInput from './search/SearchInput'
import { useState } from 'react';
export default function Properties() {

const [properties, setProperties] = useState([
    {
        id: "637c75f892731430d96bac2d",
        category: "BUY",
        homeType: null,
        type: "Guest House",
        bedrooms: 2,
        title: "first house",
        description: "this is an amazing house",
        price: 1000,
        status: false,
        ownerEmail: "merhatsidk29@gmail.com",
        images: [
            "https://property-managment.s3.amazonaws.com/1669101047837_png"
        ],
        location: [
            45.34,
            23.34
        ]
    },
    {
        id: "637c75f892731430d96bac2d",
        category: "BUY",
        homeType: null,
        type: "Apartment",
        bedrooms: 2,
        title: "First house",
        description: "this is an amazing house",
        price: 1000,
        status: false,
        ownerEmail: "merhatsidk29@gmail.com",
        images: [
            "https://property-managment.s3.amazonaws.com/1669101047837_png"
        ],
        location: [
            45.34,
            23.34
        ]
    }, 
    {
        id: "637c75f892731430d96bac2d",
        category: "Rent",
        homeType: null,
        type: "guest house",
        bedrooms: 10,
        title: "first house",
        description: "this is an amazing house",
        price: 100000,
        status: false,
        ownerEmail: "merhatsidk29@gmail.com",
        images: [
            "https://property-managment.s3.amazonaws.com/1669101047837_png"
        ],
        location: [
            45.34,
            23.34
        ]
    },
    {
        id: "637c75f892731430d96bac2d",
        category: "Rent",
        homeType: null,
        type: "guest house",
        bedrooms: 2,
        title: "first house",
        description: "this is an amazing house",
        price: 1000,
        status: false,
        ownerEmail: "merhatsidk29@gmail.com",
        images: [
            "https://property-managment.s3.amazonaws.com/1669101047837_png"
        ],
        location: [
            45.34,
            23.34
        ]
    },
    {
        id: "637c75f892731430d96bac2d",
        category: "Rent",
        homeType: null,
        type: "guest house",
        bedrooms: 2,
        title: "first house",
        description: "this is an amazing house",
        price: 1000,
        status: false,
        ownerEmail: "merhatsidk29@gmail.com",
        images: [
            "https://property-managment.s3.amazonaws.com/1669101047837_png"
        ],
        location: [
            45.34,
            23.34
        ]
    },
    {
        id: "637c75f892731430d96bac2d",
        category: "Rent",
        homeType: null,
        type: "guest house",
        bedrooms: 2,
        title: "first house",
        description: "this is an amazing house",
        price: 1000,
        status: false,
        ownerEmail: "merhatsidk29@gmail.com",
        images: [
            "https://property-managment.s3.amazonaws.com/1669101047837_png"
        ],
        location: [
            45.34,
            23.34
        ]
    }
]);
    const propertyListHTML = properties.map(property =>{
        return <Property property={property}/>
    })

  return (
    <>
       <div className='cover'>
        <div className='center-content center container'>
            <div >
              <form className=''>
                   <SearchInput/>
              </form>
            </div>
        </div> 
    </div>
    {propertyListHTML}
    </>
 
  )
}
