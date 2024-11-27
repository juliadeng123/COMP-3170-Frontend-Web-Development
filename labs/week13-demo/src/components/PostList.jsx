import { useContext } from "react";

import Post from "./Post";
import { AppContext } from "../appContext";

export default function PostList() {

    const {posts, addComment} = useContext(AppContext);

    return(
        <div className="posts">
            <h1>My Blog</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}