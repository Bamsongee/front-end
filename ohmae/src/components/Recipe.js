import "../css/Recipe.css";
import React, { useState } from "react";
import Like from "../img/recipeLike.png";
import Unlike from "../img/recipeUnlike.png";

const Recipe = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="Recipe">
            <div>
                <img className="foodImg" src="/food.png" alt="Food" />
            </div>
            <div className="recipeCategory">
                <div className="CategoryButton">한식</div>
                <div className="CategoryButton">보통</div>
                <div className="CategoryButton">30분 이하</div>
            </div>
            <div className="recipeMain">
                <div className="recipeTitle">불고기 레시피</div>
                <div className="heart" onClick={handleLikeClick}>
                    <img src={isLiked ? Like : Unlike} alt="heart" />
                </div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">재료</div>
                <div className="ingredientsTwoSection">
                    <ul className="ingredients">
                        <li>간장</li>
                        <li>간장</li>
                        <li>간장</li>
                        <li>간장</li>
                        <li>간장</li>
                    </ul>
                    <ul className="ingredients">
                        <li>간장</li>
                        <li>간장</li>
                        <li>간장</li>
                        <li>간장</li>
                        <li>간장</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">조리 순서</div>
                <div className="order">
                    {`1. 블로그에서 핫한 반응을 일으켰던 닭볶음탕이니 믿고 따라해주세요!\n2. 양파는 반을 자른 후 사각으로 썰어주세요\n3. 고추장2큰술 고추가루7큰술 설탕2큰술 국간장5큰술 마늘1큰술 넣고 소주잔으로 물1컵 넣고 섞어 주세요\n4. 닭은 끓는 물에 살짝 데쳐냅니다 끓기 시작하면 5분 정도 데친 후\n5. 물을 버리고 찬물로 불순물을 씻어주세요\n6. 데친 닭을 깊은 팬에 넣고 소주 1컵을 부어줍니다 닭 잡내를 잡아줍니다\n7. 당근 감자를 넣어주고 중간에 양념장을 올린 후 물 800ml 넣어주세요 계랑컵이 없으면 재료 끄트머리 2/3 정도만 넣어주세요\n8. 강불에서 팔팔 끓어오르면 양념장을 섞고 강불과 중불 사이에서 익히세요\n9. 국물이 반으로 졸았을 때 감자와 닭이 익었는지 젓가락으로 찔러 확인하세요\n10. 국물이 요 정도 있는 상태에서 대파 고추 양파를 넣습니다 국물 없게 조리는 건 비추구요 국물이 있게 졸여주세요\n11. 대파 청양 고추 양파를 넣은 후 휘리릭 섞고 1분 후 불을 끕니다\n12. 국물은 요 정도로 졸이면 돼요 아주 칼칼하기 때문에 국물이 있어야 밥도 비벼 먹고 맛있답니다\n13. 국물을 매콤 칼칼하게 먹을 수 있어서 맛집 식당에서 맛보는듯한 닭볶음탕 레시피 완성! 양념장이 황금 비율이랍니다  비율은 모두 지켜주세요 여러번 해보고 터득한 황금비율이에요^^\n14. 국물을 많이 있게 졸이면 매콤한 국물닭도리탕 백숙처럼 부드러운 닭고기에 국물을 얹어먹을 수 있는 스타일 (국물이 매콤 칼칼) 취향에 따라 졸여주세요`}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
