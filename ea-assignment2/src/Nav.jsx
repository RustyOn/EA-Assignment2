import {
    NavLink,
    useLocation,
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
        <div className="nav-bar">
          <ul className="nav-list">
          <li>
            <NavLink to="/translation">Translation</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={Logout}>Logout</NavLink>
          </li>
          </ul>
        </div>
      </nav>
    )
  }

  
  export default Nav