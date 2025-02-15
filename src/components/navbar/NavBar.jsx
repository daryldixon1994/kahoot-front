import { Link, NavLink } from "react-router-dom";
import "./style.css";
function NavBar() {
  return (
    <div id="navbar">
      <h1>
        <Link className="navbar-link" to="/">
          GMC KAHOOT RANK
        </Link>
      </h1>
      <nav>
        <NavLink className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/rank">
          Rank
        </NavLink>
        <NavLink className="navbar-link" to="/add-student">
          Add student
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
