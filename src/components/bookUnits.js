import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookUnits = ({ id, title, category }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div id={id}>
        <div>{title}</div>
        <div>{category}</div>
        <button
          type="button"
          onClick={(e) => {
            dispatch(removeBook(e.target.parentElement.id));
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
  category: PropTypes.string.isRequired,
};

export default BookUnits;
