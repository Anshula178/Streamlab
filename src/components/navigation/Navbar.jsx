import React from 'react';
import NavLink from './NavLink';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchVideos } from '../../features/common/CommonSlice';

const Navbar = (props) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSearch=(e)=>{
        let {value}=e.target;
        if(value.length>3){
        dispatch(searchVideos({platform:"movie",query:value}))
        navigate("/search")
        }
    }
    return (
        <nav className='text-white  py-1 px-2 bg-black'>
            <div className='container mx-auto flex items-center justify-between'>
                {/* Logo */}
                <div className="py-2">
                    <Link to="/" className="text-2xl font-bold">StreamLabs</Link>
                </div>
                {/* Navigation Links */}
                <div className='flex items-center space-x-4'>
                    <NavLink link="/">Home</NavLink>
                    <NavLink link="/browse/tv">TV Shows</NavLink>
                    <NavLink link="/browse/movie">Movies</NavLink>
                    <NavLink link="/browsebygenre/movie/28">Browse By Genre</NavLink>
                    </div>
                {/* Search Input */}
                <div className="flex items-center">
                    <input onChange={handleSearch} type="search" placeholder='Search' className='py-2 px-3 mx-2 my-2 rounded-full text-center bg-gray-800 border border-transparent hover:outline-none hover:bg-white hover:border-gray-500' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
