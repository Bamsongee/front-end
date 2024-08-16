import '../css/CommentItem.css'

const CommentItem = ({ author, content, createdAt }) => {

    return (
        <div className='CommentItem'>
            <div className='upper_item'>
                <div className='author'>
                    {author}
                </div>
                <div className='createdAt'>
                    {createdAt}
                </div>
            </div>
            
            <div className='content'>
                {content}
            </div>
        </div>
    )
}

export default CommentItem;