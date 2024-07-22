import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/mypage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Splash />} />
                    <Route exact path="/main" element={<Main />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/mypage" element={<Mypage />} />
                
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
