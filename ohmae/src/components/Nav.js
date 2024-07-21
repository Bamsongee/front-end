import React from "react";
import "../css/Nav.css";
import NavLogo from "../img/logo.png";
import Ref from "../img/NavRef.png";
import Person from "../img/NavPerson.png";

function Nav() {
    return (
        <>
            <div className="NavBox">
                <img className="ref" src={Ref}></img>
                <img className="logo" src={NavLogo}></img>
                <img className="person" src={Person}></img>
            </div>
        </>
    );
}

export default Nav;
