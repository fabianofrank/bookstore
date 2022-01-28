/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookUnits = ({ item_id, title, category }) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.parentElement.id));
  };

  return (
    <div>
      <div id={item_id}>
        <div>{title}</div>
        <div>{category}</div>
        <button type="button" onClick={removeHandler}>Remove</button>
      </div>
    </div>
  );
};

BookUnits.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookUnits;
