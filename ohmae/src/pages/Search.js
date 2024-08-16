import React, { useState } from "react";
import "../css/Search.css";
import RecipeItem from "../components/RecipeItem";
import Logo from "../img/logo.png";
import SearchIcon from "../img/send_search.png";

function Search() {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [time, setTime] = useState("");
    const [results, setResults] = useState(false);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSearchClick = () => {
        setResults(true);
    };

    return (
        <>
            <div className="page">
                <div className="SearchBox">
                    <form className="RecipeSearch2">
                        <input
                            className="RecipeSearchInput2"
                            type="text"
                            placeholder="원하는 레시피를 검색해보세요!"
                        ></input>
                        <button className="RecipeSearchInputBtn" type="button" onClick={handleSearchClick}>
                            <img src={SearchIcon} alt="Search" />
                        </button>
                    </form>
                    <div className="DetailPage-filter">
                        <select value={category} onChange={handleCategoryChange}>
                            <option value="" disabled hidden>
                                카테고리
                            </option>
                            <option value="한식">한식</option>
                            <option value="양식">양식</option>
                            <option value="중식">중식</option>
                        </select>

                        <select value={difficulty} onChange={handleDifficultyChange}>
                            <option value="" disabled hidden>
                                난이도
                            </option>
                            <option value="쉬움">쉬움</option>
                            <option value="보통">보통</option>
                            <option value="어려움">어려움</option>
                        </select>

                        <select value={time} onChange={handleTimeChange}>
                            <option value="" disabled hidden>
                                요리 소요 시간
                            </option>
                            <option value="30분 미만">30분 미만</option>
                            <option value="1시간 미만">1시간 미만</option>
                            <option value="1시간 이상">1시간 이상</option>
                        </select>
                    </div>
                    {results ? (
                        <div className="DetailPage-contents">
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                            <RecipeItem />
                        </div>
                    ) : (
                        <div className="NoResultBox">
                            <img src={Logo} alt="Logo" />
                            <div className="NoMatching1">...과 일치하는 검색 결과가 없습니다.</div>
                            <div className="NoMatching2">검색어가 정확한지 확인해보세요!</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;
