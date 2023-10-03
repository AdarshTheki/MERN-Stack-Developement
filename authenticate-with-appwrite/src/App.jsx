import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { authServices } from './AppWrite/Auth';
import { login, logout } from './Redux/authSlice';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div>
      {!loading ? (
        <div className='min-h-screen flex flex-wrap content-between'>
          <div className='w-full block'>
            <Header />
            <main className='bg-neutral min-h-[50vh]'>
              <h2 className='text-center text-primary text-xl'>
                This is a Simple Todo App built with React & Appwrite DataBase.
              </h2>
              <p className='text-center text-sm text-error'>
                Note: Only logged in users can see this page. Please login to see the posts and You can edit post. Thank
                you. :)
              </p>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <h1 className='text-center text-4xl font-bold mt-24'>Loading...</h1>
      )}
    </div>
  );
};

export default App;
