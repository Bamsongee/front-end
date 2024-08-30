import React, { useState, useEffect, useCallback } from "react";
import "../css/Search.css";
import RecipeItem from "../components/RecipeItem";
import Logo from "../img/logo.png";
import SearchIcon from "../img/send_search.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Search() {
    const [cookies] = useCookies(["accessToken", "username"]);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [time, setTime] = useState("");
    const [results, setResults] = useState(false);
    const [noQuery, setNoQuery] = useState(false);
    const [searchWord, setSearchWord] = useState("");
    const [searchRecipe, setSearchRecipe] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    // 레시피 검색
    const fetchSearchData = useCallback(
        async (searchWord) => {
            try {
                const token = cookies.accessToken;

                if (!token) {
                    console.error("No access token found in cookies");
                    return;
                }

                const response = await axios.get(`https://ohmea-backend.store/recipe/search`, {
                    params: { name: searchWord },
                    headers: {
                        Authorization: `${token}`, // 인증 토큰
                    },
                });
                if (response.data.success) {
                    console.log("success fetch data:", response.data.message);
                    console.log(response.data.data);
                    setSearchRecipe(response.data.data);
                    setResults(response.data.data.length > 0);
                    setNoQuery(false);
                } else {
                    console.error("Failed to fetch data:", response.data.message);
                    setResults(false);
                    setSearchRecipe([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setResults(false);
                setSearchRecipe([]);
            }
        },
        [cookies]
    );

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("query");

        if (searchQuery) {
            setSearchWord(searchQuery);
            fetchSearchData(searchQuery);
        } else {
            setSearchWord("");
            setNoQuery(true);
            setResults(false);
        }
    }, [fetchSearchData, location]);

    useEffect(() => {
        if (searchWord) {
            fetchSearchData(searchWord);
        }
    }, [searchWord, fetchSearchData]);

    const handleSearchClick = () => {
        if (searchWord.trim()) {
            navigate(`/recipe/search?query=${encodeURIComponent(searchWord)}`);
            fetchSearchData(searchWord);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchWord(e.target.value);
    };

    // 검색 결과 필터링
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const getTimeBoundary = (timeRange) => {
        switch (timeRange) {
            case "15분 이내":
                return 15;
            case "30분 이내":
                return 30;
            case "60분 이내":
                return 60;
            case "1시간 초과":
                return 61;
            default:
                return null;
        }
    };

    useEffect(() => {
        const timeBoundary = getTimeBoundary(time);

        const filtered = searchRecipe.filter((recipe) => {
            const recipeTime = recipe.time;

            return (
                (!category || recipe.category === category) &&
                (!difficulty || recipe.difficulty === difficulty) &&
                (timeBoundary === null || (timeBoundary === 61 ? recipeTime > 60 : recipeTime <= timeBoundary))
            );
        });

        setFilteredRecipes(filtered);
    }, [category, difficulty, time, searchRecipe]);

    return (
        <>
            <div className="page">
                <div className="SearchBox">
                    <form
                        className="RecipeSearch2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearchClick();
                        }}
                    >
                        <input
                            className="RecipeSearchInput2"
                            type="text"
                            placeholder="원하는 레시피를 검색해보세요!"
                            value={searchWord}
                            onChange={handleSearchInputChange}
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
                            <option value="일식">일식</option>
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
                            <option value="15분 이내">15분 이내</option>
                            <option value="30분 이내">30분 이내</option>
                            <option value="60분 이내">60분 이내</option>
                            <option value="1시간 초과">1시간 초과</option>
                        </select>
                    </div>
                    {noQuery ? (
                        <div className="NoResultBox">
                            <img src={Logo} alt="Logo" />
                            <div className="NoMatching1">오메의 다양한 레시피를 검색해 보세요!</div>
                            <div className="NoMatching2">메뉴 이름을 정확하게 입력해 주세요.</div>
                        </div>
                    ) : results ? (
                        <div className="DetailPage-contents">
                            {filteredRecipes.map((recipe, index) => (
                                <RecipeItem
                                    key={index}
                                    id={recipe.id}
                                    name={recipe.name}
                                    imageUrl={recipe.imageUrl}
                                    category={recipe.category}
                                    time={recipe.time}
                                    difficulty={recipe.difficulty}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="NoResultBox">
                            <img src={Logo} alt="Logo" />
                            <div className="NoMatching1">
                                <div className="NoMatching1-inputWord">{searchWord}</div>
                                <div>와(과) 일치하는 검색 결과가 없습니다.</div>
                            </div>
                            <div className="NoMatching2">검색어가 정확한지 확인해 보세요!</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;
