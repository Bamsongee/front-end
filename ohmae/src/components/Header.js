import React from "react";
import "../css/Header.css";
import Bell from "../img/bell.png";
import HeaderLogo from "../img/logo.png";
import HamBar from "../img/ham.png";

function Header() {
    return (
        <>
            <div className="HeaderBox">
                <img className="ham" src={HamBar}></img>
                <img className="header-logo" src={HeaderLogo}></img>
                <img className="bell" src={Bell}></img>
            </div>
        </>
    );
}

export default Header;
