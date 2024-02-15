import { NavLink } from "react-router-dom";
import { SlMagnifier, SlHeart, SlBag } from "react-icons/sl";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">CEIN.</h1>

      <ul className="nav__links">
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/arrivals">New Arrivals</NavLink>
        </li>
        <li>
          <NavLink to="/sales">Sales</NavLink>
        </li>
        <li>
          <NavLink to="/journals">Journal</NavLink>
        </li>
      </ul>

      <div className="nav__actions">
        <SlMagnifier />
        <span>
          <SlHeart />
          <p>0</p>
        </span>
        <span>
          <SlBag />
          <p>0</p>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
