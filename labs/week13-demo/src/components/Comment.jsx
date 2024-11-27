export default function Comment({ comment, position }) {
    return (
        <div className="comment">
            <span>{position}</span>
            <p>
                {comment.body} - <span className="commenter">{comment.email}</span>
                <button className="edit-btn">edit</button>
            </p>
        </div>
    );
}