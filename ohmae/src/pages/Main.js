import React, { useState } from "react";
import "../css/Main.css";
import Nav from "../components/Nav";
import Header from "../components/Header";

function Main() {
    return (
        <div className="page">
            <Header></Header>
            <Nav></Nav>
        </div>
    );
}

export default Main;
