import { useParams } from "react-router-dom";
import "../css/RecipeDetail.css";
import Recipe from "../components/Recipe";
import Comment from "../components/Comment";

const RecipeDetail = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <div className="page">
                <div className="RecipeDetailBox">
                    <div className="recipe-box">
                        <Recipe />
                    </div>
                    <div className="recipe-box">
                        <Comment />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetail;
