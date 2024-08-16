import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
import HeaderLogo from "../img/logo.png";
import HamBar from "../img/ham.png";
import Bell from "../img/bell.png";
import Menu from "../components/Menu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/main");
    };

    return (
        <>
            <div className="HeaderBox">
                <img className="bell" src={Bell} alt="bell"></img>
                <img className="header-logo" src={HeaderLogo} alt="HeaderLogo" onClick={goToMain}></img>
                <img className="ham" src={HamBar} alt="HamBar" onClick={toggleMenu}></img>
            </div>
            {isMenuOpen && <Menu closeMenu={closeMenu} />}
        </>
    );
}

export default Header;
