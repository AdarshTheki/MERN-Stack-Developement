import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { authServices } from "./AppWrite/Auth";
import { login, logout } from "./Redux/authSlice";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
        <div className='min-h-screen border flex flex-wrap content-between bg-gray-300'>
          <div className='w-full block'>
            <Header />
            <main>
              TODO: <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <h1 className="text-center text-4xl font-bold mt-24">Loading...</h1>
      )}
    </div>
  );
};

export default App;
