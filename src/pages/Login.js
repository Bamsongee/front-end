import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

function Login() {
    return (
        <div className="loginBox">
            <img src={Logo} alt="logo" className="login-logo"></img>
            <form className="login-form">
                <input type="text" id="username" className="id" placeholder="아이디" />
                <input type="password" id="password" className="pwd" placeholder="비밀번호" />
                <button className="loginBtn">로그인</button>
            </form>
            <div className="ToSignup">
                계정이 없으신가요?
                <Link to="/signup" style={{ color: "black", marginLeft: "8px" }}>
                    회원가입 하러가기
                </Link>
            </div>
        </div>
    );
}

export default Login;
