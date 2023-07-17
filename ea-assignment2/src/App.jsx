import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import TranslationPage from "./TranslationPage";
import Page404 from "./Page404";
import ProfilePage from "./ProfilePage";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Nav() {
  const currPath = useLocation();
  if (currPath.pathname === "/") return null;

  function Logout(){
    if(sessionStorage.getItem("currUser") === null){
      return
    }else{
      sessionStorage.clear()
    }
  }
  return (
    <nav>
      <li>
        <NavLink to="/translation">Translation</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={Logout}>Logout</NavLink>
      </li>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
