import React from "react";
import { Link } from "react-router-dom"; 
import "../css/Nav.css";
import NavLogo from "../img/logo.png";
import Ref from "../img/NavRef.png";
import Person from "../img/NavPerson.png";

function Nav() {
    return (
        <div className="NavBox">
            <Link to="/refrigerator">
                <img className="ref" src={Ref} alt="Reference" />
            </Link>
            <Link to="/main"> 
                <img className="logo" src={NavLogo} alt="Logo" />
            </Link>
            <Link to="/mypage">
                <img className="person" src={Person} alt="Person" />
            </Link>
        </div>
    );
}

export default Nav;
