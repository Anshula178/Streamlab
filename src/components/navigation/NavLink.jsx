import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = (props) => {
    const {link,children}=props;
  return (
   <Link to={link} className='font-semibold text-white no-underline py-4 hover:bg-red-400 transition  px-3 '>
    {children}
   </Link>
  )
}

export default NavLink
