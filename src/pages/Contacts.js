import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import "./Contacts.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacts() {
  const { contactId } = useParams();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Fetch the contact details based on the contactId
    axios
      .get(`/contacts/${contactId}`)
      .then(({ data }) => {
        setLoading(false);
        setContact(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, [contactId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="contacts-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Contact Details</h1>
        {/* With this section using React Bootstrap's Button component */}
        <div className="social-media-icons">
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
            <Button variant="info">
              <i className="bi bi-twitter"></i> Twitter
            </Button>
          </a>
          {/* Add more social media icons and links */}
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {contact ? (
          <div className="contact-details">
            <div className="contact-info">
              <div className="shop-branches">
                <h2>Visit Our Stores</h2>
                <p>Shop Branch 1 Address</p>
                <p>Shop Branch 2 Address</p>
                <p>Shop Branch 3 Address</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Contact not found</p>
        )}
      </div>
    </div>
  );
}

export default Contacts;


