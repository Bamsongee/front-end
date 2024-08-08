import '../css/Comment.css'
import CommentItem from './CommentItem';

const Comment = () => {

    return (
        <div className='Comment'>
            <div className='commentTitle'>
                댓글
            </div>
            <div>
                <CommentItem author={"요리왕"} content={"레시피 감사합니다"} createdAt={"2024-07-07"}/>
                <CommentItem author={"제방왕"} content={"맛있어요~"} createdAt={"2024-07-07"}/>
                <CommentItem author={"김은서"} content={"감사합니다!"} createdAt={"2024-07-07"}/>
            </div>
        </div>
    )
}

export default Comment;