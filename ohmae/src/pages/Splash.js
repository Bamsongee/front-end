import React, { useState } from "react";
import "../css/Splash.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";

function Splash() {
    // Main으로 자동 넘어가기
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login");
        }, 2000); // 2초 후 넘어감
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <div className="splashBox">
            <img src={Logo} alt="logo" className="splash-logo"></img>
            <div className="dotBox">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
            </div>
        </div>
    );
}

export default Splash;
