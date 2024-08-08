import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav'
import '../css/RecipeDetail.css'
import Recipe from '../components/Recipe';
import Comment from '../components/Comment';

const RecipeDetail = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <Header />
                <div className='RecipeDetail'>
                <div className='recipe-box'>
                    <Recipe />
                </div>
                <div className='recipe-box'>
                    <Comment />
                </div>
            </div>
        
            <Nav />
        </>
    )
}

export default RecipeDetail;