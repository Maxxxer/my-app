import React from "react";
import MyButton from "./UI/button/MyButton";

const Form = () => {
  return (
    <form>
<input type="text" placeholder="Название поста" />
      <input type="text" placeholder="Описание поста" />
      <MyButton disabled = {true}>Push the button</MyButton>
    </form>
  )
}

export default Form;