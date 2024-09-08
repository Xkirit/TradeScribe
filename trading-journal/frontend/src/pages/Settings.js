import React, { useEffect, useState } from 'react';
import '../index.css';
const Settings = () => {

  const[DarkMode,SetDarkMode]= useState(()=>{
    const savedMode= localStorage.getItem('mode');
    return savedMode==='true'|| false;
  });


  useEffect(()=>{
    if(DarkMode){
      document.body.classList.add('darkMode');
      
      // ('darkmode: on',DarkMode);
    }
    else{document.body.classList.remove('darkMode');
    // ("darkMode: off");
    
}localStorage.setItem('mode',DarkMode);},[DarkMode])

  

  const toggleDarkMode=()=>{
    SetDarkMode(!DarkMode);
  };



  return (
    <div className=" py-[12vh] w-full  container px-10 flex">
      <div className=' flex-1 w-[80vh] h-[80vh]'>
        <h1 className="text-4xl font-bold font-playfair text-green-900 ">Settings</h1>
    
    
        <br />

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
              <input onChange={toggleDarkMode} type="checkbox" checked={DarkMode}  className="toggle theme-controller" />
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
    </div>
  );
};

export default Settings;
