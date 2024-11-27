import { useState, useEffect } from 'react'

import PostList from './components/PostList'

import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  function getComments(comments, post) {
    return comments.filter(comment => comment.postId == post.id);
  }

  function addComment(comment) {
    const post = posts.find(p => p.id == comment.postId);

    const comments = [...post.comments, comment];

    const updatedPosts = posts.map(p => {
      if (p.id == comment.postId) {
        return {...posts, comments};
      } else {
        return p;
      }
    })

    setPosts(updatedPosts);
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const [postsResp, commentsResp] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/comments')
        ])
        let posts = await postsResp.json();
        const comments = await commentsResp.json();
        posts = posts.map(post => ({...post, comments: getComments(comments, post)}))
        setPosts(posts);
      } catch(e) {
        console.log(e.message)
      }
    }

    fetchPosts();
  },[]);
  return (
    <div className='App'>
      <PostList posts={posts} addComment={addComment} />
    </div>
  );
}

export default App;
