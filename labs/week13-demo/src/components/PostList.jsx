import Post from "./Post";

export default function PostList({ posts, addComment }) {
    return(
        <div className="posts">
            <h1>My Blog</h1>
            {posts.map(post => <Post key={post.id} post={post} addComment={addComment}/>)}
        </div>
    )
}