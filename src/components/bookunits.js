import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const BookUnits = ({ id, title, author }) => (
  // const dispatch = useDispatch();
  <div key={id}>
    <div>{title}</div>
    <div>{author}</div>
  </div>
);

BookUnits.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookUnits;
