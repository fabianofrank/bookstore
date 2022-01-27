import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookAdd from '../components/bookAdd';
import BookUnits from '../components/bookUnits';
import { loadBook } from '../redux/books/books';

const BookDisplay = () => {
  const books = useSelector((state) => state.books);
  const booksArray = Object.values(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  return (
    <div>
      <section id="shelf">
        {booksArray.map((book) => (book.map((miniBook) => (
          <BookUnits
          // item_id={book.id}
            title={miniBook.title}
            category={miniBook.category}
          />
        ))
        ))}
      </section>
      <BookAdd />
    </div>
  );
};

export default BookDisplay;
