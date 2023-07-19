import { cleanup } from "@testing-library/react";
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
    if (currPath.pathname === "/") return
  
    function Logout(){
      if(sessionStorage.getItem("currUser") === null){
        return
      }else{
        sessionStorage.clear()
      }
    }

    function CleanUpCreatedElements(){
      cleanup()
    }

    return (
      <nav>
        <div className="nav-bar">
          <ul className="nav-list">
          <li>
            <NavLink to="/translation">Translation</NavLink>
          </li>
          <li onClick={ CleanUpCreatedElements }>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li onClick={ CleanUpCreatedElements }>
            <NavLink to="/" onClick={Logout}>Logout</NavLink>
          </li>
          </ul>
        </div>
      </nav>
    )
  }

  export default Nav