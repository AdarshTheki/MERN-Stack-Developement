import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../appwriteConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(false);

   useEffect(() => {
      getUserOnLoad();
   }, []);

   const getUserOnLoad = async () => {
      try {
         const accountDetails = await account.get();
         setUser(accountDetails);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   const handleUserLogin = async (e, credential) => {
      e.preventDefault();
      try {
         const response = await account.createEmailSession(credential.email, credential.password);
         console.log('session login: ', response);
         const accountDetails = await account.get();
         setUser(accountDetails);
      } catch (error) {
         console.log(error.message);
      }
   };

   const handleUserLogout = async () => {
      await account.deleteSession('current');
      setUser(null);
   };

   const contextData = { user, handleUserLogin, handleUserLogout };

   return (
      <AuthContext.Provider value={contextData}>
         {loading ? <p>Loading...!</p> : children}
      </AuthContext.Provider>
   );
};
export const useAuth = () => {
   return useContext(AuthContext);
};

export default AuthContext;
