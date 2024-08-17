import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("https://ohmea-backend.store/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                const token = response.headers.get("accessToken");
                if (token) {
                    localStorage.setItem("token", token);
                    alert("로그인 성공!");
                    window.location.href = "https://ohmae.netlify.app/main";
                } else {
                    setErrorMessage("토큰이 제공되지 않았습니다.");
                }
            } else {
                setErrorMessage(data.message || "로그인 실패");
            }
        } catch (error) {
            setErrorMessage("서버와 통신 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="loginBox">
            <img src={Logo} alt="logo" className="login-logo" />
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="text"
                    id="username"
                    className="id"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    className="pwd"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginBtn" type="submit">
                    로그인
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
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
