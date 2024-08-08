import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Search.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import RecipeItem from "../components/RecipeItem";
import Logo from "../img/logo.png";

function Search() {
    return (
        <>
            <Header></Header>
            <div className="page">
                <div className="SearchBox">
                    <form className="RecipeSearch">
                        <input
                            className="RecipeSearchInput"
                            type="text"
                            placeholder="원하는 레시피를 검색해보세요"
                        ></input>
                    </form>
                    <div className="NoResultBox">
                        <img src={Logo} alt="Logo"></img>
                        <div className="NoMatching1">...과 일치하는 검색 결과가 없습니다.</div>
                        <div className="NoMatching2">검색어가 정확한지 확인해보세요!</div>
                    </div>
                </div>
            </div>
            <Nav></Nav>
        </>
    );
}

export default Search;
