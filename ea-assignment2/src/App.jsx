import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import TranslationPage from "./TranslationPage";
import Page404 from "./Page404";
import ProfilePage from "./ProfilePage";
import Nav from "./Nav"
import Banner from "./Banner"
import { StrictMode, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {

  return (
    //<StrictMode>
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Banner />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Page404 />} />
          
        </Routes>
      </div>
    </BrowserRouter>
   // </StrictMode>
    
  );
}

export default App;
