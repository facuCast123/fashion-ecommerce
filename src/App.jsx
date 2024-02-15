import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { IoClose } from "react-icons/io5";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <img src="../images/modal-image.jpg" alt="Promo image" />
            <div className="modal__content__container">
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <IoClose />
              </button>
              <span>Enter your email to unlock</span>
              <h1>15% of your first order</h1>
              <p>
                Plus, get insider access to promotions, launches, events and
                more.
              </p>
              <input type="text" placeholder="Enter your email address" />
              <button className="modal__button">Unlock access</button>
            </div>
          </div>
        </div>
      )}

      <div className="announcement">
        <p>
          Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now
        </p>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
