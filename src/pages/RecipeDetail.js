import { useParams } from "react-router-dom";
import "../css/RecipeDetail.css";
import Recipe from "../components/Recipe";
import Comment from "../components/Comment";

const RecipeDetail = () => {
    const params = useParams();
    const recipeId = params.id;
    console.log(recipeId);

    return (
        <>
            <div className="page">
                <div className="RecipeDetailBox">
                    <div className="recipe-box">
                        <Recipe id={recipeId} />
                    </div>
                    <div className="recipe-box">
                        <Comment id={recipeId} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetail;
