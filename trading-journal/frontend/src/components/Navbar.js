import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BsMenuButton } from "react-icons/bs";

const Navbar = ({ toggleSidebar }) => {
  const {auth, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout= ()=>{
    logout();
    navigate('/signin');
  }
  return (
    <nav className=" navbar fixed z-10 backdrop-blur-md mx-auto w-screen lg:w-screen md:w-screen sm:w-screen text-green-900 p-5 py-1 flex items-center justify-center shadow-sm border-none">
      <div className="flex gap-3 items-center space-x-4 mx-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from closing the sidebar
            toggleSidebar();
          }}
          className="text-white focus:outline-none "
        >
          <RxHamburgerMenu size={24} />
        </button>
        <Link to={'/'}>
        <div style={{ fontWeight: 950}} className="text-2xl font-extrabold font-playfair italic ">TradeScribe</div>
        </Link>
      </div>
      <div className="space-x-5 font-poppins hidden md:flex">
        <Link to='/'>
        <button className="navbar bg-none hover:bg-primary  font-bold px-3 rounded">
          Home 
        </button>
        </Link>
        <button className="navbar bg-none hover:bg-primary  font-bold  px-3 rounded">
          About
        </button>
        {auth.token ? (
            <button 
              onClick={handleLogout} 
              className=" text-red-400 hover:bg-primary bg-none font-bold py-4 px-3  rounded "
            >
              Signout
            </button>
          ) : (
            <button className="navbar bg-none hover:bg-primary  font-bold  px-3 rounded">
            <Link 
              to="/signin" 
              
            >
              SignIn
            </Link>
            </button>
          )}
      </div>
      <div className="dropdown dropdown-bottom dropdown-end lg:hidden md:hidden backdrop-blur-md z-10">
        <div tabIndex={0} role="button" className="btn glass bg-transparent text-green-900 border-none size-14 shadow-none"><BsMenuButton/></div>
        <ul tabIndex={0} className="dropdown-content menu bg-white bg-opacity-30 backdrop-blur-lg rounded-box z-20 w-52 p-2 shadow">
          <li><a><Link to="/">Home</Link></a></li>
          <li><a><Link to="/About">About</Link></a></li>
          <li><a>

          {auth.token ? (
          <button
            onClick={handleLogout}
            className="text-red-400 hover:bg-primary bg-none font-bold px-3 rounded"
          >
            Signout
          </button>
        ) : (
          <Link to="/signin">
            Sign in
          </Link>
        )}
            
            
            </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
