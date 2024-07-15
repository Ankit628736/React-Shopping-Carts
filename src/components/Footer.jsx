import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-secondary text-light py-4">
        <div className="row">
          {/* First div */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="h4 mb-3">Contact Information</div>
            <div className="px-3">
              <p className="mb-1">Name: Ankit Raj</p>
              <p className="mb-1">Email: singh.ankit9871@gmail.com</p>
              <p className="mb-1">Phone: 6287361885</p>
            </div>
          </div>
          {/* Second div */}
          <div className="col-md-6">
            <div className="h4 mb-3">Google Maps</div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7263993671354!2d75.70256857505855!3d31.25599656015716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1720346534701!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="embed-responsive-item"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-light py-4">
        <div className="container text-center">
          <div className="d-flex justify-content-center mb-4">
            <a href="https://www.facebook.com" className="text-light mx-2"><FaFacebook size={24} /></a>
            <a href="https://www.twitter.com" className="text-light mx-2"><FaTwitter size={24} /></a>
            <a href="https://www.instagram.com" className="text-light mx-2"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com" className="text-light mx-2"><FaLinkedinIn size={24} /></a>
          </div>
          <div className="border-top pt-3">
            <p className="small mb-0">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
