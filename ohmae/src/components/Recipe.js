import '../css/Recipe.css';
import CategoryButton from './CategoryButton';
import RecipeItem from './RecipeItem';
import heart from './../assets/heart.png'

const Recipe = () => {
    return (
        <div className='Recipe'>
            <div>
                <img className='foodImg' src="/food.png" alt="Food" />
            </div>
            <div className='recipeCategory'>
                <CategoryButton text={"한식"}/>
                <CategoryButton text={"보통"}/>
                <CategoryButton text={"30분 이하"}/>
                
            </div>
            <div className='recipeMain'>
                <div className='recipeTitle'>
                    불고기 레시피
                </div>
                <div className='heart'>
                    <img src={heart} />
                </div>
            </div>
            <hr />
            <div>
                <div className='recipeSubTitle'>
                    재료
                </div>
                <div>
                    <ul className='ingredients'>
                        <RecipeItem ingredient={"소고기 400g"} />
                        <RecipeItem ingredient={"간장 3T"} />
                        <RecipeItem ingredient={"쪽파 1대"} />
                        <RecipeItem ingredient={"설탕"} />
                        <RecipeItem ingredient={"참기름 반 스푼"} />
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <div className='recipeSubTitle'>
                    조리 순서
                </div>
                <ol className='order'>
                    <RecipeItem ingredient={"소고기를 먹기 좋은 크기로 썬다."} />
                    <RecipeItem ingredient={"어쩌구 저쩌구"} />
                </ol>
            </div>
        </div>
    );
}

export default Recipe;
