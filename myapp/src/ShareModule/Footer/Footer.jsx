import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>all org</h4>
              <ul>
                <li>about us</li>
                <li>our services</li>
                <li>careers</li>
                <li>corporate information</li>
                
              </ul>
            </div>
            <div className="footer-col">
              <h4>help</h4>
              <ul>
                <li>FAQ</li>
                <li>shipping</li>
                <li>return centre</li>
                <li>sell</li>
                <li>payment options</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>policy</h4>
              <ul>
                <li>security</li>
                <li>terms & conditions</li>
                <li>privacy policy</li>
                <li>press</li>
                <li>offline policy</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className='social-links'>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <p>Copyright 2024 All Org.  All right reserved. </p> 
        </div>
       
      </footer>
      
    </>
  )
}
