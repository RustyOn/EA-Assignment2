import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import TranslationPage from "./TranslationPage";
import Page404 from "./Page404";
import DisplayUser from "./DisplayUser";
import {useEffect} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom";

function Nav() {
  const currPath = useLocation();
  if (currPath.pathname === "/") return null;

  return (
    <nav>
      <li>
        <NavLink to="/translation">Translation</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
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
          <Route path="/profile" element={null} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
