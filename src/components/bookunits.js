import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookUnits = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div id={id}>
      <div key={id}>
        <div>{title}</div>
        <div>{author}</div>
        <button
          type="button"
          onClick={(e) => {
            dispatch(removeBook(e.target.id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

BookUnits.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookUnits;
