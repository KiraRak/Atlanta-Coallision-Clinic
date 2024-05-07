import React, { useState } from 'react'
import banner from './../assets/Images/banner.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { GrEbay } from 'react-icons/gr';

function Search() {
  const tags=[
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name:'Testimonials'
    },
    {
      id:3,
      name:'Road Crashes'
    },
    {
      id:4,
      name:'Injured Drivers'
    },
    {
      id:5,
      name:'Lawyer Conecction'
    }
  ]
  const [activeIndex,setActiveIndex]=useState(0);

  return (
    <div className='srch-container'>
      <img src={banner} className='banner'/>
      <div className='srch-bar'>
        <IoSearchOutline className='srch-icon'/>
        <input type='text' placeholder='Search' className='srch-input'/>
      </div>
      <div className='srch-filter'>
        {tags.map((item, index) => (
        <ul key={item.id} onClick={() => 
        { setActiveIndex(index); selectedTag(item.name) }} 
        className={`tag-item ${index === activeIndex ? 'active' : ''}`}>
          <li>{item.name}</li>
        </ul>
        ))}
      </div>
    </div>
  )
}

export default Search