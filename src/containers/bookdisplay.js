import React from 'react';
import { useSelector } from 'react-redux';
import BookAdd from '../components/bookadd';
import BookUnits from '../components/bookunits';

const BookDisplay = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <section id="shelf">
        {books.map((book) => (
          <BookUnits
            id={book.id}
            title={book.title}
            author={book.author}
            key={book.id}
          />
        ))}
      </section>
      <BookAdd />
    </div>
  );
};

export default BookDisplay;
