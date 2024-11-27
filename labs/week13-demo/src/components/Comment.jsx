import { useState } from "react";
import CommentForm from "./CommentForm";

export default function Comment({ comment, position }) {

    const [editing, setEditing] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        setEditing(false);
    }

    if (editing) return <CommentForm onSubmit={onSubmit} comment={comment} />;
    return (
        <div className="comment">
            <span>{position}</span>
            <p>
                {comment.body} - <span className="commenter">{comment.email}</span>
                <button className="edit-btn" onClick={() => setEditing(true)}>edit</button>
            </p>
        </div>
    );
}