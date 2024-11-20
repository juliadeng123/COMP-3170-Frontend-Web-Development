import { useEffect, useState } from "react";
import { uselocation } from 'react-router-dom'

import Post from "./post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const {state: user} = uselocation();
    
    const url = user ? `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
                     :"https://jsonplaceholder.typicode.com/posts";
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
        <div className="Posts">
            {user && <h3>posts</h3>}
            {posts.map(posts => <Post key={posts.id} post={posts} />)}
        </div>
    );
}