import React from "react";
import "./Navbar.scss"

const  Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="text">fiverr</span>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    <span>Become a seller</span>
                    <button>Join</button>
                </div>
            </div>
            <hr />
        
            <div className="menu">
            <span>Test</span>
            <span>Test2</span>
            </div>

        </div>
    );
};

export default Navbar;

