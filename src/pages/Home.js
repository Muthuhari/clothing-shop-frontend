import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row, Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { LinkContainer } from "react-router-bootstrap"; // Import LinkContainer from react-router-bootstrap
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";


function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);

  // Define your contactDetails object with your actual contact information here
  const contactDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "Mobile: +30-6977664062 (mobile phone)/Mobile: +30-6977664062 (mobile phone)",
    address: "123 Main Street, Cityville, State 12345",
  };

  return (
    <div className="home-container">
      <div className="search-bar-container">
        <Form className="d-flex search-form">
          <FormControl type="text" placeholder="Search for easy clothes,fancy etc." className="search-input" />
          <Button className="search-button" variant="bule">Search</Button>
        </Form>
      </div>
      {/* Sale Banner */}
      <div className="sale__banner--container mt-5">
        <img src="https://res.cloudinary.com/drlx72mlc/image/upload/v1684004168/HH_fjxice.jpg" alt="Sale Banner" />
      </div>

      {/* Last Products */}
      <div className="last-products-container container mt-4">
        <h2>Latest Products</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            View All Products
          </Link>
        </div>
      </div>
      <div className="sale__banner--container mt-4">
                <img src="https://res.cloudinary.com/drlx72mlc/image/upload/v1672600521/Shop_New_Products_Website_Banner_Brown_White_Tan_3_nchx3s.png" />
            </div>
      {/* Categories */}
      <div className="categories-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
              <Col md={4} key={category.name}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
      <div>
      <h2>Contact Details</h2>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details-container container mt-4">
        <p>
          <span className="info-label">Email:</span> {contactDetails.email}
        </p>
        <p>
          <span className="info-label">Hot Line:</span> {contactDetails.phone}
        </p>

        {/* New Social Media Icons Section */}
      <div className="social-media-icons-container container mt-4">
        <a href="https://www.facebook.com">
          <Button variant="primary">
            <i className="bi bi-facebook"></i> Facebook
          </Button>
        </a>
        <a href="https://twitter.com">
          <Button variant="info">
            <i className="bi bi-twitter"></i> Twitter
          </Button>
        </a>
        <a href="https://twitter.com">
          <Button variant="success">
            <i className="bi bi-twitter"></i> instagram
          </Button>
        </a>
        {/* Add more social media icons and links */}
      </div>
      
        {/* New Shop Branches Section */}
        <div className="shop-branches-container container mt-4">
  <h2>Visit Our Stores</h2>
  <div className="shop-branch">
    <img src="/img/imge1.jpg" alt="Shop Branch 1" />
  <ul className="shop-info-list">
    <li>Address: 1234 Elm Street, Suite 567, Apartment Complex Name, Cityville, State 12345, Sri Lanka</li>
    <li>Tell: +30-2106019311 (landline)</li>
    <li>Mobile: +30-6977664062 (mobile phone)</li>
    <li>Fax: +30-2106398905 (fax)</li>
  </ul>
  </div>
  <div className="shop-branch">
    <img src="/img/imge2.jpg" alt="Shop Branch 2" />
    <ul className="shop-info-list">
    <li>Address: No 2232/1, tevil 200 road, Keas 69 Str. 15234, Chalandri, Athens, Greece</li>
    <li>Tell: +30-2106019311 (landline)</li>
    <li>Mobile: +30-6977664062 (mobile phone)/ +967865782(mobile phone)</li>
    <li>Fax: +30-2106398905 (fax)</li>
  </ul>
  </div>
</div>

      </div>
      
    </div>
  );
}

export default Home;

