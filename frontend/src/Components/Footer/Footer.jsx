import React from 'react';
import './footer.css';
export default function Footer(){

    return (
        <>
         <div className="footer-container">
            <div className="footer-top">
            <div className="each-section">
                <div className='footer-headings'>Abstract</div>
                <div className="options">Blog</div>
                <div className="options">Help Center</div>
                <div className="options">Release Notes</div>
            </div>
            <div className="each-section">
                <div className='footer-headings'>Resourses</div>
                <div className="options">Blog</div>
                <div className="options">Help Center</div>
                <div className="options">Release Notes</div>
            </div>
            <div className="each-section">
                <div className='footer-headings'>Community</div>
                <div className="options">Twitter</div>
                <div className="options">LinkedIn</div>
                <div className="options">Facebook</div>
                <div className="options">Dribbble</div>
                <div className="options">Podcast</div>
            </div>
            <div className="each-section">
                <div className='footer-headings'>Company</div>
                <div className="options">About us</div>
                <div className="options">Careers</div>
                <div className="options">Legals</div>
            </div>
            </div>
            <div className="footer-bottom">
                <div className="contact-us">
                    <h4>Contact Us</h4>
                    <p>info@abstract.com</p>
                </div>
                <div className="copyright">
                    <p>&copy; Copyright 2022</p>
                    <p>Abstract Studio Design, Inc</p>
                    <p>All rights reserved</p>
                </div>
            </div>
         </div>
        </>
    )
}