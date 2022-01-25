import React from 'react';

const BookUnits = () => (
  <section id="shelf-book">
    <div id="nav-1/3">
      <p>category</p>
      <h3>book title</h3>
      <p>author</p>
      <div>
        <p>comments</p>
        <a href="/">remove</a>
        <p>edit</p>
      </div>
    </div>
    <div id="nav-2/3">
      <img alt="login" />
      <div>
        <p>%</p>
        <p>completed</p>
      </div>
    </div>
    <div id="nav-3/3">
      <p>CURRENT CHAPTER</p>
      <p>Chapter #number</p>
      <button id="shelf-update" type="button">UPDATE PROGRESS</button>
    </div>
  </section>
);

export default BookUnits;
