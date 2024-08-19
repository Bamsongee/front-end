import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Main.css";
import RecipeItem from "../components/RecipeItem";
import FoodItem from "../components/FoodItem";
import GoToImg from "../img/goto.png";
import axios from "axios";
import { useCookies } from "react-cookie";

function Main() {
    const [cookies] = useCookies(["accessToken", "username"]);
    const [customRecipe, setCustomRecipe] = useState([]);
    const [saleProduct, setSaleProduct] = useState([]);
    const [makeRecipe, setMakeRecipe] = useState([]);
    const [popularRecipe, setPopularRecipe] = useState([]);
    const [userData, setUserData] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    // 맞춤 레시피 조회
    const fetCustomData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.get(`https://ohmea-backend.store/algorithm`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.data.success) {
                console.log("success fetch data:", response.data.message);
                const limitedData = response.data.data.slice(0, 10);
                setCustomRecipe(limitedData);
            } else {
                console.error("Failed to fetch data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [cookies]);

    useEffect(() => {
        fetCustomData();
    }, [fetCustomData]);

    // 할인 상품 조회
    const fetSaleData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.get(`https://ohmea-backend.store/product`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.data.success) {
                console.log("success fetch data:", response.data.message);
                const limitedData = response.data.data.slice(0, 10);
                setSaleProduct(limitedData);
            } else {
                console.error("Failed to fetch data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [cookies]);

    useEffect(() => {
        fetSaleData();
    }, [fetSaleData]);

    // 만들 수 있는 레시피 조회
    const fetchMakeData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.get(`https://ohmea-backend.store/recipe/possible`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.data.success) {
                console.log("success fetch data:", response.data.message);
                const limitedData = response.data.data.slice(0, 10);
                setMakeRecipe(limitedData);
            } else {
                console.error("Failed to fetch data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [cookies]);

    useEffect(() => {
        fetchMakeData();
    }, [fetchMakeData]);

    // 인기 레시피 조회
    const fetchPopularData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.get(`https://ohmea-backend.store/recipe/popular`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.data.success) {
                console.log("success fetch data:", response.data.message);
                const limitedData = response.data.data.slice(0, 10);
                setPopularRecipe(limitedData);
            } else {
                console.error("Failed to fetch data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [cookies]);

    useEffect(() => {
        fetchPopularData();
    }, [fetchPopularData]);

    // 유저 정보 조회
    const fetchUserData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.get(`https://ohmea-backend.store/mypage`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.data.success) {
                console.log("success fetch data:", response.data.message);
                setUserData(response.data.data);
            } else {
                console.error("Failed to fetch data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [cookies]);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    // 유저 정보 한글로 바꾸기
    const getGenderLabel = (gender) => {
        switch (gender) {
            case "WOMAN":
                return "여";
            case "MAN":
                return "남";
            default:
                return "";
        }
    };

    const getCookingSkillLabel = (skill) => {
        switch (skill) {
            case "UPPER":
                return "상";
            case "MIDDLE":
                return "중";
            case "LOWER":
                return "하";
            default:
                return "";
        }
    };

    // 레시피 검색
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/recipe/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <>
            <div className="page">
                <div className="MainBox">
                    <form className="RecipeSearch" onSubmit={handleSubmit}>
                        <input
                            className="RecipeSearchInput"
                            type="text"
                            placeholder="원하는 레시피를 검색해보세요!"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        ></input>
                    </form>
                    <div className="Main-My">
                        <div className="Main-My-Top">
                            <div className="Main-userName">{userData.username}님, 안녕하세요!</div>
                            <Link to="/mypage" className="MainToMy">
                                MY
                            </Link>
                        </div>
                        <div className="Main-My-Mid">
                            <div className="Main-userInfo">
                                <div className="userInfo-Name">성별</div>
                                <div className="userInfo-Info">{getGenderLabel(userData.gender)}</div>
                            </div>
                            <div className="Main-userInfo">
                                <div className="userInfo-Name">요리 실력</div>
                                <div className="userInfo-Info">{getCookingSkillLabel(userData.cookingSkill)}</div>
                            </div>
                        </div>
                        <div className="Main-My-Bottom">
                            <div className="Main-userInfo">
                                <div className="userInfo-Name">한 끼 예산</div>
                                <div className="userInfo-Info">{userData.cookingBudget} 원</div>
                            </div>
                        </div>
                    </div>
                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">{userData.username}님의 맞춤 레시피</div>
                            <Link to="/custom">
                                <img className="GoToDetail" src={GoToImg} alt="GoToImg"></img>
                            </Link>
                        </div>
                        <div className="ConList">
                            {customRecipe.map((recipe, index) => (
                                <div className="RecipeItemMargin" key={index}>
                                    <RecipeItem
                                        id={recipe.id}
                                        name={recipe.name}
                                        imageUrl={recipe.imageUrl}
                                        category={recipe.category}
                                        time={recipe.time}
                                        difficulty={recipe.difficulty}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">핫딜 특가🔥</div>
                            <Link to="/products">
                                <img className="GoToDetail" src={GoToImg} alt="GoToImg"></img>
                            </Link>
                        </div>
                        <div className="ConList-food">
                            {saleProduct.map((product, index) => (
                                <FoodItem
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    link={product.url}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">{userData.username}님이 만들 수 있는 레시피</div>
                            <Link to="/make">
                                <img className="GoToDetail" src={GoToImg} alt="GoToImg"></img>
                            </Link>
                        </div>
                        <div className="ConList">
                            {makeRecipe.map((recipe, index) => (
                                <div className="RecipeItemMargin" key={index}>
                                    <RecipeItem
                                        id={recipe.id}
                                        name={recipe.name}
                                        imageUrl={recipe.imageUrl}
                                        category={recipe.category}
                                        time={recipe.time}
                                        difficulty={recipe.difficulty}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">인기 레시피 TOP 10</div>
                        </div>
                        <div className="ConList">
                            {popularRecipe.map((recipe, index) => (
                                <div className="RecipeItemMargin" key={index}>
                                    <RecipeItem
                                        id={recipe.id}
                                        name={recipe.name}
                                        imageUrl={recipe.imageUrl}
                                        category={recipe.category}
                                        time={recipe.time}
                                        difficulty={recipe.difficulty}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
