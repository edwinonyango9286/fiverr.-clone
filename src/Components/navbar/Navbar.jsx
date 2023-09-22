import React, { useEffect, useState } from "react";
import "./Navbar.scss"
import { Link, useLocation } from "react-router-dom";

const  Navbar = ()=>{
    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false);
    const {pathname} = useLocation()

    const isActive =()=>{
        window.scrollY>0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll" ,isActive)

        return()=>{
            window.removeEventListener("scroll",isActive);
        };
        
    },[]
    )

    const currentUser ={
        id:1,
        userName:"Dave Gray",
        isSeller:true
    }

    return(
        <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link  to="/" className="link">
                    <span className="text">fiverr</span>
                    </Link> 
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller &&
                        <span>Become a seller</span>}
                    { !currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="https://images.unsplash.com/photo-1614174669570-037a92241af8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt=""/>
                            
                                <span>{
                                    currentUser?.userName}</span>
                                    { open && <div className="options">
                                        {currentUser?.isSeller &&(
                                            <>
                                            <Link to="/mygigs" className="link" >Gigs</Link>
                                            <Link  to="./add" className="link">Add New Gig</Link>
                                            </>
                                        )}
                                        <Link to="/orders" className="link">Orders</Link>
                                        <Link to="/messages" className="link" >Messages</Link>
                                        <span>Logout</span>

                                    </div>}
                            </div>
                    )}
                </div>
            </div>
            { active || pathname!=="/"&&(
                <>
                <hr />
            <div className="menu">

                <Link className="link">Graphic & Design</Link>
                <Link className="link">Programming & Tech</Link>
                <Link className="link">Digital Marketing</Link>
                <Link className="link">Video $ Animation</Link>
                <Link className="link">Writing & Translation</Link>
                <Link className="link">Music & Audio</Link>
                <Link className="link">Business</Link>
                <Link className="link">Data</Link>
                <Link className="link">Photography</Link>
                <Link className="link">AI Services</Link>

            </div>
            </>)}
        </div>
    );
};

export default Navbar;

