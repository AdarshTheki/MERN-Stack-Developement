import * as React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";

const MainScreen = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<p>There is nothings 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default MainScreen;

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "orange" : "green",
    marginRight: "2rem",
  });

  return (
    <>
      <h2>React Router</h2>
      <ul style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <NavLink to='/home' style={style}>
          Home
        </NavLink>
        <NavLink to='/about' style={style}>
          About
        </NavLink>
      </ul>
      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};
const About = () => {
  return <h2>About</h2>;
};
