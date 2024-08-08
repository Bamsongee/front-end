import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Info from "./pages/Info";
import Mypage from "./pages/Mypage";
import Refrigerator from "./pages/Refrigerator";
import RecipeDetail from "./pages/RecipeDetail";
import Custom from "./pages/Custom";
import IngredientRecipe from "./pages/IngredientRecipe";
import Save from "./pages/Save";
import Search from "./pages/Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Splash />} />
                    <Route exact path="/main" element={<Main />} />
                    <Route exact path="/custom" element={<Custom />} />
                    <Route exact path="/ing-recipe" element={<IngredientRecipe />} />
                    <Route exact path="/save" element={<Save />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/products" element={<Product />} />
                    <Route exact path="/mypage" element={<Mypage />} />
                    <Route exact path="/refrigerator" element={<Refrigerator />} />
                    <Route exact path="/info" element={<Info />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
