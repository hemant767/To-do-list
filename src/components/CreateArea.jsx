import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((preContent) => {
      return {
        ...preContent,
        [name]: value
      };
    });
  }

  function submit(event) {
    props.onAdd(inputText);

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
