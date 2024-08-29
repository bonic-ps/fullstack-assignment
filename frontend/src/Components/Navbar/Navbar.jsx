import React from 'react';
import './navbar.css';

export default function Navbar(){

    return (
        <>
         <div className="nav-container">
            <div className="nav-left">
                Abstract | Help Center
            </div>
            <div className="nav-right">
                <button>Submit a request</button>
            </div>
         </div>
        </>
    )
}