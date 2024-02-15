import { Link } from "react-router-dom";
import { SlMagnifier, SlHeart, SlBag, SlMenu } from "react-icons/sl";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">CEIN.</h1>

      <ul className="nav__links">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/arrivals">New Arrivals</Link>
        </li>
        <li>
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <Link to="/journals">Journal</Link>
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

      <div className="nav__menu">
        <SlMenu />
      </div>
    </nav>
  );
};

export default Navbar;
