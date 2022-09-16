import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {

    const history = useNavigate()
    const userId = localStorage.getItem("userId")

    const handleLogout = () => {
        localStorage.clear();
        history('/login');
    }

 

    return (
        <>
        <div className="navbar__items">
            
            <div className="navbar__item">
                <Link to="/"> 
                    <div>
                        <p className="navbar__label">Home</p>
                    </div>
                </Link>
            </div>
            
            <div className="navbar__item">
                <Link to="/journals">
                    <div>
                        <p className="navbar__label">My Journal</p>
                    </div>
                </Link>
            </div>

            <div className="navbar__item">
                <Link to="/addjournal">
                    <div > 
                        <p className="navbar__label">Add Journal</p>
                    </div>
                </Link>
            </div>

            <div className="navbar__item" id="navbar__item__right">
                <a onClick={handleLogout} >
                <div>
                    <p className="navbar__label">Logout</p>
                </div>
                </a>
            </div>
        </div>
        </>
    )
}