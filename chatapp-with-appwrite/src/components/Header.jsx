import React from 'react';
import { useAuth } from '../utiles/AuthContext';
import { LogOut } from 'react-feather';

export default function Header() {
   const { user, handleUserLogout } = useAuth();
   return (
      <div id='header--wrapper'>
         {user ? (
            <>
               time: 1:49:00 mins // Welcome, {user?.name}
               <LogOut className='header--link' onClick={handleUserLogout} />
            </>
         ) : (
            <>
               <h1>Please Login</h1>
            </>
         )}
      </div>
   );
}
