import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, createList] = useState([]);

  function addNote(newNote) {
    createList((preList) => {
      return [...preList, newNote];
    });
  }

  function deleteNote(id) {
    createList((preList) => {
      return preList.filter((listItems, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {list.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
