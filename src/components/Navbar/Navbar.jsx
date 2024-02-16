import { Link } from "react-router-dom";
import { SlMagnifier, SlHeart, SlBag, SlMenu } from "react-icons/sl";

import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="nav">
      <h1 className="nav__logo">CEIN.</h1>

      <ul className="nav__links">
        <li
          onClick={() => setShowDropdown((prev) => !prev)}
          onMouseEnter={() =>
            setTimeout(() => {
              showDropdown ? null : setShowDropdown(true);
            }, 300)
          }
        >
          Shop
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

      {showDropdown && (
        <div
          className="shop__dropdown"
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="dropdown__content">
            <div className="dropdown__links">
              <h2>Categories</h2>
              <p>Bags</p>
              <p>Clothing</p>
              <p>Leather Goods</p>
              <p>Accessories</p>
              <p>Gifts</p>
              <p>Shop All</p>
            </div>

            <div className="dropdown__links">
              <h2>Featured</h2>
              <p>New Arrivals</p>
              <p>Bestsellers</p>
              <p>Trending Now</p>
              <p>Loungewear</p>
            </div>

            <div className="dropdown__links">
              <h2>Collections</h2>
              <p>Party and events</p>
              <p>Office looks</p>
              <p>Selection</p>
              <p>Online exclusive</p>
              <p>Knitwear</p>
              <p>Total look</p>
              <p>Basics</p>
            </div>

            <div className="dropdown__image"></div>
          </div>
        </div>
      )}

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
