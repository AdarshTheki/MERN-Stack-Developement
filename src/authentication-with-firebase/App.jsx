import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateAccountPage from "./Pages/CreateAccount"
import LogInPage from "./Pages/LogInPage"
import './App.css'
import HomePage from "./Pages/HomePage";
import LogoutPage from "./Pages/LogoutPage"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/signup' element={<CreateAccountPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
