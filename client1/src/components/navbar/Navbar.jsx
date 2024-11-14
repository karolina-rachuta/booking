import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">KaroBooking</span>
        </Link>
        {/* <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div> */}

        {user ? (
          <div className="navItems--user">
            <p className="navUser">{user.username}</p>
            <button className="navButton" onClick={handleLogout}>
              {" "}
              Log out{" "}
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
