import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

import { FaInstagram } from "react-icons/fa";

import "./App.css";

function App() {
  const productData = [
    {
      id: 1,
      name: "Classic Easy Zipper Tate",
      url: "../images/product-1.png",
      price: "298",
    },
    {
      id: 2,
      name: "Concertina Phone Bag",
      url: "../images/product-2.png",
      price: "248",
    },
    {
      id: 3,
      name: "Wool Cashmere Sweater Coat",
      url: "../images/product-3.png",
      price: "399",
    },
    {
      id: 4,
      name: "Single Origin Cashmere Beanie",
      url: "../images/product-4.png",
      price: "99",
    },
    {
      id: 5,
      name: "Alpaca Wool Cropped Cardigan",
      url: "../images/product-5.png",
      price: "248",
    },
  ];

  const instagramImagesData = [
    { id: 1, url: "../images/instagram-1.png" },
    { id: 2, url: "../images/instagram-2.png" },
    { id: 3, url: "../images/instagram-3.png" },
    { id: 4, url: "../images/instagram-4.png" },
    { id: 5, url: "../images/instagram-5.png" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <h1 className="hero__heading">
            Elevate Your Style <br />
            Timeless Fashion, Sustainable Choices
          </h1>
          <button className="hero__button">Shop Now</button>
        </section>

        <section className="collection">
          <p>
            Elevate your lifestyle with a more intelligent, superior wardrobe.
            <br />
            Our range is crafted sustainably with longevity in mind.
          </p>

          <div className="collection__image-container">
            <img src="../images/new-arrivals.jpg" alt="new arrivals" />
            <img src="../images/casual-edit.jpg" alt="casual edit" />
            <img src="../images/best-sellers.jpg" alt="best sellers" />
          </div>
        </section>

        <section className="products">
          <h2>What to Wear Now</h2>

          <div className="products__container">
            {productData.map((product) => {
              return (
                <Product
                  key={product.id}
                  url={product.url}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </div>

          <div className="products__image-container">
            <img src="../images/smart-chic.jpg" alt="Smart chic" />
            <img src="../images/ready-to-go.png" alt="Ready to go" />
          </div>
        </section>

        <section className="choices">
          <h3 className="choices__heading">The Art of Fewer, Better Choices</h3>
          <p className="choices__text">
            Opting for quality over quantity means selecting timeless, durable,
            and responsibly made items. This approach simplifies our lives and
            fosters a deeper appreciation for our surroundings. Emphasizing
            longevity and responsible production resonates with a more
            sustainable and mindful lifestyle.
          </p>
        </section>

        <section className="instagram-shop">
          <h3>Shop Instagram</h3>

          <div className="shop__image-container">
            {instagramImagesData.map((image) => (
              <div
                key={image.id}
                className="image-container"
                onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("hovered")
                }
              >
                <img key={image.id} src={image.url} alt="Instagram image" />
                <div className="instagram-logo">
                  <FaInstagram />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
