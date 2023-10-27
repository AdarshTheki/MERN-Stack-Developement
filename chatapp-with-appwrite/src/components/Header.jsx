import React from 'react';
import { useAuth } from '../utiles/AuthContext';
import { LogOut } from 'react-feather';

export default function Header() {
   const { user, handleUserLogout } = useAuth();
   return (
      <div id='header--wrapper'>
         {user ? (
            <>
               Welcome, {user?.name}
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
