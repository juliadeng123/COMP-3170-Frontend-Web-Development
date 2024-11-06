import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const [users, setUsers] = useState([]);

  function getAuthor(post) {
    return users.find(user => String(user.id) === String(post.userId));
  }

  const [status, setStatus] = useState("idle");

  const isLoading = status === "loading";
  
  const isError = status === "error";

  useEffect(() => {

    async function fetchData(){
      let postsResponse, usersResponse;

      try {
        setStatus("loading");
        
        [postsResponse, usersResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users")
        ])

        const posts = await postsResponse.json();
        const users = await usersResponse.json();
        
        setPosts(posts);
        setUsers(users);
        
        setStatus("idle");

      } catch(e) {
        setStatus("error");
        console.log(e.message);
      }
    }

    fetchData();
  }, []);
  

  return (
    <Container>
      <h1>My Blog Posts</h1>
      
      {posts.map(post => {
        const author = getAuthor(post);
        
        return(
          <Post key = {post.id}>
          <h2>{post.title}</h2>
          By <a href={`https://${author.website}`} target='_blank'>{author.name}</a>
          <p>{post.body}</p>
        </Post>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Post = styled.div`
  text-align: left;
  margin-top: 1.5rem;
  padding: 0.5em;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
`

export default App
