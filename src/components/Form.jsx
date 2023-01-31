import React, { useRef, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Form = () => {
  const [title, setTitle] = useState("asdf");
  const [body, setBody] = useState("asdf");
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost] )
    console.log(newPost);
  };
  return (
    <form>
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Push the button</MyButton>
    </form>
  );
};

export default Form;
