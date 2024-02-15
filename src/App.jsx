import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
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
