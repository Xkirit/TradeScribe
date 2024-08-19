import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {

  const [DarkMode, SetDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode === 'true' || false;
  });


  useEffect(() => {
    if (DarkMode) {
      document.body.classList.add('darkMode');

      console.log('darkmode: on', DarkMode);
    }
    else {
      document.body.classList.remove('darkMode');
      console.log("darkMode: off");

    } localStorage.setItem('mode', DarkMode);
  }, [DarkMode])



  const toggleDarkMode = () => {
    SetDarkMode(!DarkMode);
  };


  return (
    <div
      className={`container text-1xl font-playfair font-bold  text-green-900 w-64 h-full fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out shadow-lg z-50 rounded-r-lg`}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
    >
      <nav className="mt-12">
        <Link to="/Dashboard" className="block py-5 pl-2 px-10 text-center rounded transition duration-200 hover:bg-secondary-light ">
          Dashboard
        </Link>
        <Link to="/Trades" className="block py-5 pl-2 px-10 text-center rounded transition duration-200 hover:bg-secondary-light">
          Trades
        </Link>
        <Link to="/Analysis" className="block py-5 pl-2 px-10 text-center rounded transition duration-200 hover:bg-secondary-light">
          Analysis
        </Link>
        <Link to="/Settings" className="block py-5 pl-2 px-10 text-center rounded transition duration-200 hover:bg-secondary-light">
          Settings
        </Link>
        <Link to="/Help" className="block py-5 pl-2 px-10 rounded text-center transition duration-200 hover:bg-secondary-light">
          Help
        </Link>
        <div className=" py-[50vh] pl-[7vh] items-center bottom-1 justify-center">

          <ul className=''>

            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input onChange={toggleDarkMode} type="checkbox" checked={DarkMode} className="toggle theme-controller" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>

          </ul>



        </div>
      </nav >
    </div>
  );
};

export default Sidebar;
