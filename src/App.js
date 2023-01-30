// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Form from "./components/Form";
import PostList from "./components/PostList";
import "./styles/App.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
    { id: 4, title: "Javascript 4", body: "Description" },
  ]);

  return (
    <div className="App">
      <Form />
      <PostList posts={posts} title="Список" />
      
    </div>
  );
}

export default App;
