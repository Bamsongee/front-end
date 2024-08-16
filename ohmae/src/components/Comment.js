import "../css/Comment.css";
import CommentItem from "./CommentItem";
import sendComment from "../img/send_comment.png";

const Comment = () => {
    return (
        <div className="Comment">
            <div className="commentTitle">댓글</div>
            <div className="commentItemBox">
                <CommentItem author={"윤윤지"} content={"레시피 감사합니다"} createdAt={"2024-07-07"} />
                <CommentItem author={"박규리"} content={"맛있어요~"} createdAt={"2024-07-07"} />
                <CommentItem author={"김은서"} content={"감사합니다!"} createdAt={"2024-07-07"} />
            </div>
            <form className="CommentForm">
                <input className="CommentInput" type="text"></input>
                <button className="CommentInputBtn" type="button">
                    <img src={sendComment} alt="sendComment" />
                </button>
            </form>
        </div>
    );
};

export default Comment;
