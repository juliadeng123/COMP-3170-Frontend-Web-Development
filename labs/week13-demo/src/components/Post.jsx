import { useState,useContext } from "react";
import { nanoid } from 'nanoid';
import Comment from "./Comment";
import CommentForm from "./CommentForm";

import { AppContext } from "../appContext";

export default function Post({ post}) {
    const [editing, setEditing] = useState(false);
    const { addComment } = useContext(AppContext);

    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        const newComment = {
            id: nanoid(),
            postId: post.id,
            email: data.get('email'),
            body: data.get('body'),
        };

        addComment(newComment);

        setEditing(false);
    }
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="comments">
                {post.comments.map((comment, index) => (
                    <Comment key={comment.id} comment={comment} position={++index}/>
                ))}
            </div>
            {editing ? <CommentForm onSubmit={onSubmit} /> 
            :   <button className="edit-btn" onClick={() => setEditing(true)}>Add a comment</button>
            }
        </div>
    )
}