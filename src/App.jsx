import { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePost } from "./hooks/usePosts";
import "./styles/App.css";
import { useEffect } from "react";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    setTotalCount(response.headers['x-total-count'])
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать посты
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>Произошла ошибка ${ postError}</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список"
        />
      )}
    </div>
  );
}

export default App;
