import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

import Post from "./post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const {state: user} = useLocation();
    
    const url = user ? `https://jsonplaceholder.typicode.com/users/${user.id}/posts?_start=0&_limit=3`
                        : "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(url);
                const posts = await response.json();
                setPosts(posts);
            } catch(e) {
                console.log(e.message);
            }
            }

        fetchPosts();
    },[])

    return (
        <div className="posts">
            {user && <h3>posts</h3>}
            {posts.map(posts => <Post key={posts.id} post={posts} />)}
        </div>
    );
}