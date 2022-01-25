import React from 'react';

const BookAdd = () => (
  <section id="add-book">
    <h2>ADD NEW BOOK</h2>
    <form id="add-form">
      <input id="add-title" placeholder="Book title" required />
      <select name="Category">
        <option value="Philosophy" selected>Philosophy</option>
        <option value="Politics" selected>Politics</option>
        <option value="Science Fiction" selected>Science Fiction</option>
      </select>
      <button id="add-bttn" type="button">ADD BOOK</button>
    </form>
  </section>
);

export default BookAdd;
