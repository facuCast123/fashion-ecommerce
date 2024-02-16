import { SlMagnifier, SlHeart, SlBag, SlClose, SlMenu } from "react-icons/sl";

import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleDropdown = (toggle, name) => {
    toggle
      ? setTimeout(() => {
          document.querySelector(".dropdown").style.display = "block";
          showSearch ? setShowSearch(false) : null;
        }, 300)
      : (document.querySelector(".dropdown").style.display = "none");

    switch (name) {
      case "shop":
        document.querySelector(".dropdown__shop").style.display = "flex";
        document.querySelector(".dropdown__arrivals").style.display = "none";
        document.querySelector(".dropdown__bestsellers").style.display = "none";
        break;
      case "arrivals":
        document.querySelector(".dropdown__arrivals").style.display = "flex";
        document.querySelector(".dropdown__shop").style.display = "none";
        document.querySelector(".dropdown__bestsellers").style.display = "none";
        break;
      case "bestsellers":
        document.querySelector(".dropdown__bestsellers").style.display = "flex";
        document.querySelector(".dropdown__shop").style.display = "none";
        document.querySelector(".dropdown__arrivals").style.display = "none";
        break;
    }
  };

  return (
    <nav className="nav">
      <h1 className="nav__logo">CEIN.</h1>

      <ul className="nav__links">
        <li onMouseEnter={() => toggleDropdown(true, "shop")}>Shop</li>

        <li onMouseEnter={() => toggleDropdown(true, "arrivals")}>
          New Arrivals
        </li>

        <li onMouseEnter={() => toggleDropdown(true, "bestsellers")}>
          Bestsellers
        </li>

        <li>Journal</li>
      </ul>

      <div className="dropdown" onMouseLeave={() => toggleDropdown(false)}>
        <div className="dropdown__shop">
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

          <div className="dropdown__image shop-image"></div>
        </div>

        <div className="dropdown__arrivals">
          <div className="dropdown__image-container">
            <img src="../images/product-1.png" alt="product" />
            <img src="../images/arrivals-2.png" alt="product" />
            <img src="../images/arrivals-3.png" alt="product" />
            <img src="../images/arrivals-4.png" alt="product" />
            <img src="../images/arrivals-5.png" alt="product" />
            <img src="../images/product-4.png" alt="product" />
          </div>

          <div className="dropdown__image arrivals-image"></div>
        </div>

        <div className="dropdown__bestsellers">
          <div className="dropdown__links">
            <h2>Categories</h2>
            <p>Cases</p>
            <p>Passport</p>
            <p>Pouches</p>
            <p>Bags</p>
            <p>Wallets</p>
            <p>Keychains</p>
          </div>

          <div className="dropdown__links">
            <h2>Featured</h2>
            <p>Zipper Tote</p>
            <p>Wide Strap</p>
            <p>Trench Cape</p>
            <p>Cardholder</p>
          </div>

          <div className="dropdown__image bestsellers-image"></div>
        </div>
      </div>

      <div className="nav__actions">
        <span onClick={() => setShowSearch((prev) => !prev)}>
          <SlMagnifier />
        </span>
        <span>
          <SlHeart />
          <p>0</p>
        </span>
        <span>
          <SlBag />
          <p>0</p>
        </span>
      </div>

      <div
        className="nav__search"
        style={{ display: showSearch ? "block" : "none" }}
      >
        <div className="nav__search__container">
          <span>
            <SlMagnifier />
          </span>
          <input type="text" placeholder="Search..." />
          <span onClick={() => setShowSearch(false)}>
            <SlClose />
          </span>
        </div>
      </div>

      <div className="nav__menu">
        <SlMenu />
      </div>
    </nav>
  );
};

export default Navbar;
