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
    )
  }

  export default Nav