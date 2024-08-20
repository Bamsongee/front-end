import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
import HeaderLogo from "../img/logo.png";
import HamBar from "../img/ham.png";
import Back from "../img/header_back.png";
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

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="HeaderBox">
                <img className="Back" src={Back} alt="Back" onClick={goBack}></img>
                <img className="header-logo" src={HeaderLogo} alt="HeaderLogo" onClick={goToMain}></img>
                <img className="ham" src={HamBar} alt="HamBar" onClick={toggleMenu}></img>
            </div>
            {isMenuOpen && <Menu closeMenu={closeMenu} />}
        </>
    );
}

export default Header;
