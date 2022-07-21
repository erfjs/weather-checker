import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './theme-toggle';

const NavBar = () => {


  return (
    <nav className="mb-4 dark:text-white">
      <div className="mx-auto sm:px-6 md:max-w-2xl md:px-0 lg:max-w-4xl lg:px-2 xl:max-w-4xl xl:px-0 2xl:max-w-6xl">

        <div className="relative flex h-16 items-center justify-between">

         
          <div className='md:pl-0 pl-3'>
             <Link to="/">
              <h3 className="ml-1 text-xl font-semibold">Weather Checker</h3>
              </Link></div>
           

            <div className="flex flex-1 items-center justify-end items-stretch justify-end md:pr-0 pr-3">
             
                <div className="flex items-center space-x-4">
                  
                  <Toggle />
                </div>
           
         
          </div>
        </div>
      </div>
 
    </nav>
  );
};

export default NavBar;
