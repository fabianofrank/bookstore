import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookAdd = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: new Date().getTime().toString(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <section id="add-book">
      <h2>ADD NEW BOOK</h2>
      <form id="add-form" onSubmit={submitBookToStore}>
        <input className="add-input" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book title" required />
        <input className="add-input" onChange={(e) => setCategory(e.target.value)} value={category} placeholder="Category" required />
        <button id="add-bttn" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookAdd;
