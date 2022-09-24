import React from "react";

const AddBook = () => (
  <>
    <form>
      <input
        id="bookName"
        type="text"
        name="title"
        required
        placeholder="Book Name"
      ></input>
      <input
        id="author"
        type="text"
        name="author"
        required
        placeholder="Author"></input>
      <button type="submit">Add Book</button>
    </form>
  </>
);
export default AddBook;
