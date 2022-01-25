import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookAdd = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime().toString(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <section id="add-book">
      <h2>ADD NEW BOOK</h2>
      <form id="add-form" onSubmit={submitBookToStore}>
        <input id="add-title" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book title" required />
        <input id="add-author" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Author" required />
        <button id="add-bttn" type="button">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookAdd;
