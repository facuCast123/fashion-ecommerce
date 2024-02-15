import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="contact">
          <h4 className="link__heading">Contact us</h4>
          <div className="contact__content">
            <p>+1 (844) 326-6000</p>
            <p>Email Us</p>
            <p>Mon-Fri 9am-3pm PT</p>
          </div>
        </div>

        <div className="customers">
          <h4 className="link__heading">Customers</h4>
          <p>Start a Return</p>
          <p>Return Policy</p>
          <p>FAQ</p>
          <p>Catalogs and Mailers</p>
          <p>About Group Gifting</p>
        </div>

        <div className="company">
          <h4 className="link__heading">Company</h4>
          <p>About Us</p>
          <p>Sustainability</p>
          <p>Discover Revive</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
      </div>

      <div className="footer__newsletter">
        <h4>Get the latest news from us</h4>

        <input
          className="newsletter__input"
          type="text"
          placeholder="Enter your email address"
        />
        <span className="newsletter__tos">
          By signing up, you agree to our <a href="#">Privacy Policy</a> and{" "}
          <a href="">Terms of Service</a>.
        </span>
        <button className="newsletter__button">Subscribe</button>
      </div>

      <span className="footer__tm">&#169;CEIN</span>
    </footer>
  );
};

export default Footer;
