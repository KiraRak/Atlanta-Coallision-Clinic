import React from 'react'
import logo from './../assets/Images/logo.png'
function Header() {
  return (
    <div className='hed-container'>
        <img src={logo} className='logo'/>
        <ul className='list'>
            <li className='list-item'>Home</li>
            <li className='list-item'>About Us</li>
            <li className='list-item'>Contact Us</li>
            <li className='list-item'>FAQs</li>
        </ul>
        {/*<button className='hed-button'>Subscribe</button>*/}
    </div>
  )
}

export default Header