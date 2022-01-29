import React from 'react';
import { useSelector } from 'react-redux';
import BookAdd from '../components/bookAdd';
import BookUnits from '../components/bookUnits';

const BookDisplay = () => {
  const books = useSelector((state) => state.books);

  return (
    <div id="wrapper">
      <section id="shelf">
        {books.map((book) => (
          <BookUnits
            key={book.item_id}
            item_id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))}
      </section>
      <BookAdd />
    </div>
  );
};

export default BookDisplay;
